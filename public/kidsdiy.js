/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("#datepickerDialog .btn-primary").click(function(event){
    $('#datepickerDialog').modal('hide');
    $('#applicationDialog').modal('show');
});


$("#applicationDialog .btn-default").click(function(event){
    $('#applicationDialog').modal('hide');
    $('#datepickerDialog').modal('show');
});


$("#applicationDialog .btn-primary").click(function(event){
    $('#applicationDialog').modal('hide');
});


