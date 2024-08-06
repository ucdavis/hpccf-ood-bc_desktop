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
 *  low2: hidden
 *  gpuh: visible
 *  bgpu: visible
 */
function toggle_gpu_num_visibility() {
  let queue = $("#batch_connect_session_context_auto_queues");
  console.log(queue.val());

  toggle_visibilty_of_form_group(
    '#batch_connect_session_context_gpu_num',
    queue.val().includes("gpu")
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
