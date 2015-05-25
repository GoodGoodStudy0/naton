/**
 * Created by pursuer on 15-4-14.
 */

window.alert = function(str,type)
{
  //对话框
  //alert("确定删除？","dialogueBox");
  //提示框
  //alert("提交成功！","promptBox");
  var alertFram = document.createElement("div");
  var dialogueBox ='<div class="modal fade" id="bs-dialogue" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">\n'
          +'<div class="modal-dialog modal-sm">\n'
          +'<div class="modal-content">\n'
          +'<div class="modal-header bgcolorGray">\n'
          +'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n'
          +'<h4 class="modal-title">提示框</h4>\n'
          +'</div>\n'
          +'<div class="modal-body">\n'
          +'<h4>'+str+'</h4>\n'
          +'</div>\n'
          +'<div class="modal-footer">'
          +'<button type="button" class="btn btn-white" id="cancel" data-dismiss="modal">取消</button>'
          +'<button type="button" class="btn btn-blue" id="confirm">确定</button>'
          +'</div>'
          +'</div>'
          +'</div>'
          +'</div>';
  var promptBox= '<div class="modal fade" id="bs-promptBox" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">\n'
          +'<div class="modal-dialog modal-sm">\n'
          +'<div class="modal-content">\n'
          +'<div class="modal-header bgcolorGray">\n'
          +'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n'
          +'<h4 class="modal-title">提示框</h4>\n'
          +'</div>\n'
          +'<div class="modal-body">\n'
          +'<h4>'+str+'</h4>\n'
          +'</div>\n'
          +'</div>\n'
          +'</div>\n'
          +'</div>\n';
    $('#bs-dialogue').remove();
    $('#bs-promptBox').remove();
    if(type=='dialogueBox'){
      alertFram.innerHTML = dialogueBox;
      document.body.appendChild(alertFram);
      $('#bs-dialogue').modal('show');
    }
    else if(type=='promptBox') {
      alertFram.innerHTML = promptBox;
      document.body.appendChild(alertFram);
      $('#bs-promptBox').modal('show');
      time();
    }
    window.location.reload();
    var wait=1;
  function time() {
    if (wait == 0) {
      $('#bs-promptBox').modal('hide')
    }
    else {
      wait--;
      setTimeout(function() {
          time()
        }, 1000)
    }
  }
  //document.body.appendChild(shield);

};
