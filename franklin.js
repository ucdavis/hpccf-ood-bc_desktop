/**
 *   Toggle the visibilty of a form group
 *
 *   @param      {string}    form_id  The form identifier
 *   @param      {boolean}   show     Whether to show or hide
 */
function toggle_visibilty_of_form_group(form_id, show) {
  let form_element = $(form_id);
  let parent = form_element.parent();

  if(show) {
    parent.show();
  } else {
    form_element.val('');
    parent.hide();
  }
}

/**
 *  Toggle the visibilty of the "gpu_num" field when a gpu queue is selected
 *
 *  high: hidden
 *  low: visible
 *  *-gpu: visible
 */
function toggle_gpu_num_visibility() {
  let queue = $("#batch_connect_session_context_auto_queues");
  let gpu_queues = [
    "low",
    "jalettsgrp-gpu",
    "jawdatgrp-gpu",
    "mmgdept-gpu",
    "cashjngrp-gpu",
    "mmaldogrp-gpu",
    "cnsdept-gpu",
    "ajfishergrp-gpu",
  ];

  toggle_visibilty_of_form_group(
    '#batch_connect_session_context_gpu_num',
    gpu_queues.includes(queue.val())
  );
}

/**
 *  Event handler to update view on changes to the slurm queue field
 */
function set_gpu_queue_change_handler() {
  let queue = $("#batch_connect_session_context_auto_queues");
  queue.change(toggle_gpu_num_visibility);
}

/**
 *  Install event handlers
 */
$(document).ready(function() {
  /* Ensure that fields are shown or hidden based on what was set in the last session */
  toggle_gpu_num_visibility();
  set_gpu_queue_change_handler();
});
