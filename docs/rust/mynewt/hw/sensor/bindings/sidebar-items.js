initSidebarItems({"constant":[["SENSOR_IGN_LISTENER",""],["SENSOR_ITF_I2C",""],["SENSOR_ITF_SPI",""],["SENSOR_ITF_UART",""],["SENSOR_THRESH_ALGO_USERDEF",""],["SENSOR_THRESH_ALGO_WATERMARK",""],["SENSOR_THRESH_ALGO_WINDOW",""],["SENSOR_VALUE_TYPE_FLOAT",""],["SENSOR_VALUE_TYPE_FLOAT_TRIPLET",""],["SENSOR_VALUE_TYPE_INT32",""],["SENSOR_VALUE_TYPE_INT32_TRIPLET",""],["SENSOR_VALUE_TYPE_OPAQUE",""],["sensor_event_type_t_SENSOR_EVENT_TYPE_DOUBLE_TAP",""],["sensor_event_type_t_SENSOR_EVENT_TYPE_FREE_FALL",""],["sensor_event_type_t_SENSOR_EVENT_TYPE_ORIENT_CHANGE",""],["sensor_event_type_t_SENSOR_EVENT_TYPE_ORIENT_X_CHANGE",""],["sensor_event_type_t_SENSOR_EVENT_TYPE_ORIENT_X_H_CHANGE",""],["sensor_event_type_t_SENSOR_EVENT_TYPE_ORIENT_X_L_CHANGE",""],["sensor_event_type_t_SENSOR_EVENT_TYPE_ORIENT_Y_CHANGE",""],["sensor_event_type_t_SENSOR_EVENT_TYPE_ORIENT_Y_H_CHANGE",""],["sensor_event_type_t_SENSOR_EVENT_TYPE_ORIENT_Y_L_CHANGE",""],["sensor_event_type_t_SENSOR_EVENT_TYPE_ORIENT_Z_CHANGE",""],["sensor_event_type_t_SENSOR_EVENT_TYPE_ORIENT_Z_H_CHANGE",""],["sensor_event_type_t_SENSOR_EVENT_TYPE_ORIENT_Z_L_CHANGE",""],["sensor_event_type_t_SENSOR_EVENT_TYPE_SINGLE_TAP",""],["sensor_event_type_t_SENSOR_EVENT_TYPE_SLEEP",""],["sensor_event_type_t_SENSOR_EVENT_TYPE_SLEEP_CHANGE",""],["sensor_event_type_t_SENSOR_EVENT_TYPE_WAKEUP",""],["sensor_type_t_SENSOR_TYPE_ACCELEROMETER",""],["sensor_type_t_SENSOR_TYPE_ALL",""],["sensor_type_t_SENSOR_TYPE_ALTITUDE",""],["sensor_type_t_SENSOR_TYPE_AMBIENT_TEMPERATURE",""],["sensor_type_t_SENSOR_TYPE_COLOR",""],["sensor_type_t_SENSOR_TYPE_EULER",""],["sensor_type_t_SENSOR_TYPE_GRAVITY",""],["sensor_type_t_SENSOR_TYPE_GYROSCOPE",""],["sensor_type_t_SENSOR_TYPE_LIGHT",""],["sensor_type_t_SENSOR_TYPE_LINEAR_ACCEL",""],["sensor_type_t_SENSOR_TYPE_MAGNETIC_FIELD",""],["sensor_type_t_SENSOR_TYPE_NONE",""],["sensor_type_t_SENSOR_TYPE_PRESSURE",""],["sensor_type_t_SENSOR_TYPE_PROXIMITY",""],["sensor_type_t_SENSOR_TYPE_RELATIVE_HUMIDITY",""],["sensor_type_t_SENSOR_TYPE_ROTATION_VECTOR",""],["sensor_type_t_SENSOR_TYPE_TEMPERATURE",""],["sensor_type_t_SENSOR_TYPE_USER_DEFINED_1",""],["sensor_type_t_SENSOR_TYPE_USER_DEFINED_2",""],["sensor_type_t_SENSOR_TYPE_USER_DEFINED_3",""],["sensor_type_t_SENSOR_TYPE_USER_DEFINED_4",""],["sensor_type_t_SENSOR_TYPE_USER_DEFINED_5",""],["sensor_type_t_SENSOR_TYPE_USER_DEFINED_6",""],["sensor_type_t_SENSOR_TYPE_WEIGHT",""]],"fn":[["mgr_find_next_bydevname","Search the sensor list and find the next sensor that corresponds to a given device name."],["sensor_clear_high_thresh","Clears the high threshold for a sensor"],["sensor_clear_low_thresh","Clears the low threshold for a sensor"],["sensor_get_type_traits_byname","Get the type traits for a sensor"],["sensor_get_type_traits_bytype","Search the sensor type traits list for specific type of sensor"],["sensor_init","Initialize a sensor"],["sensor_itf_lock","Lock access to the sensor_itf specified by si.  Blocks until lock acquired."],["sensor_itf_unlock","Unlock access to the sensor_itf specified by si."],["sensor_lock","Lock access to the sensor specified by sensor.  Blocks until lock acquired."],["sensor_mgr_evq_get","Get the current eventq, the system is misconfigured if there is still no parent eventq."],["sensor_mgr_find_next","The sensor manager contains a list of sensors, this function returns the next sensor in that list, for which compare_func() returns successful (one).  If prev_cursor is provided, the function starts at that point in the sensor list."],["sensor_mgr_find_next_bytype","Find the \"next\" sensor available for a given sensor type."],["sensor_mgr_lock","Lock sensor manager to access the list of sensors"],["sensor_mgr_match_bytype","Check if sensor type matches"],["sensor_mgr_put_interrupt_evt","Puts a interrupt event on the sensor manager evq"],["sensor_mgr_put_notify_evt","Puts a notification event on the sensor manager evq"],["sensor_mgr_put_read_evt","Puts read event on the sensor manager evq"],["sensor_mgr_register","Register the sensor with the global sensor list. This makes the sensor searchable by other packages, who may want to look it up by type."],["sensor_mgr_unlock","Unlock sensor manager once the list of sensors has been accessed"],["sensor_oic_tx_trigger","Transmit OIC trigger"],["sensor_pkg_init","Package init function. Remove when we have post-kernel init stages."],["sensor_read","Read the data for sensor type \"type,\" from the given sensor and return the result into the \"value\" parameter."],["sensor_register_err_func","Register a sensor error callback.  The callback is executed when the sensor manager fails to read from the given sensor."],["sensor_register_listener","Register a sensor listener. This allows a calling application to receive callbacks for data from a given sensor object."],["sensor_register_notifier","Register a sensor notifier. This allows a calling application to receive callbacks any time a requested event is observed."],["sensor_reset","Resets the sensor"],["sensor_set_n_poll_rate","Set the sensor poll rate multiple based on the device name, sensor type"],["sensor_set_thresh","Set the thresholds along with the comparison algo for a sensor"],["sensor_trigger_init","Sensor trigger initialization"],["sensor_unlock","Unlock access to the sensor specified by sensor."],["sensor_unregister_listener","Un-register a sensor listener. This allows a calling application to clear callbacks for a given sensor object."],["sensor_unregister_notifier","Un-register a sensor notifier. This allows a calling application to stop receiving callbacks for events on the sensor object."],["set_poll_rate_ms","Set the sensor poll rate"]],"static":[["sensor_base_ts",""],["sensor_mgr",""],["sensor_notify_evt_area",""],["sensor_notify_evt_pool",""],["sensor_read_event",""]],"struct":[["__BindgenBitfieldUnit",""],["__BindgenUnionField",""],["_bindgen_ty_1",""],["_bindgen_ty_1__bindgen_ty_1",""],["os_callout__bindgen_ty_1",""],["os_dev__bindgen_ty_1",""],["os_event__bindgen_ty_1",""],["os_eventq__bindgen_ty_1",""],["os_memblock__bindgen_ty_1",""],["os_mempool__bindgen_ty_1",""],["os_mempool__bindgen_ty_2",""],["os_mutex__bindgen_ty_1",""],["os_sanity_check__bindgen_ty_1",""],["os_task__bindgen_ty_1",""],["os_task__bindgen_ty_2",""],["os_task__bindgen_ty_3",""],["sensor",""],["sensor__bindgen_ty_1",""],["sensor__bindgen_ty_2",""],["sensor__bindgen_ty_3",""],["sensor__bindgen_ty_4",""],["sensor_accel_data",""],["sensor_cfg","Configuration structure, describing a specific sensor type off of an existing sensor."],["sensor_color_data",""],["sensor_data_t",""],["sensor_driver",""],["sensor_euler_data",""],["sensor_gyro_data",""],["sensor_humid_data",""],["sensor_int",""],["sensor_itf",""],["sensor_light_data",""],["sensor_listener",""],["sensor_listener__bindgen_ty_1",""],["sensor_mag_data",""],["sensor_notifier","Registration for sensor event notifications"],["sensor_notifier__bindgen_ty_1",""],["sensor_notify_ev_ctx",""],["sensor_notify_os_ev",""],["sensor_press_data",""],["sensor_quat_data",""],["sensor_read_ctx","Read context for calling user function with argument"],["sensor_read_ev_ctx","Context for sensor read events"],["sensor_temp_data",""],["sensor_timestamp",""],["sensor_type_traits","Sensor type traits list"],["sensor_type_traits__bindgen_ty_1",""]],"type":[["__int16_t",""],["__int32_t",""],["__int64_t",""],["__uint16_t",""],["__uint32_t",""],["__uint8_t",""],["os_dev_close_func_t",""],["os_dev_init_func_t","Initialize a device."],["os_dev_open_func_t",""],["os_dev_resume_func_t",""],["os_dev_suspend_func_t",""],["os_event_fn",""],["os_membuf_t",""],["os_sanity_check_func_t",""],["os_stack_t",""],["os_task_func_t",""],["os_time_t",""],["sensor_clear_trigger_thresh_t","Clear the high/low threshold values for a specific sensor for the sensor type."],["sensor_data_func_t","Callback for handling sensor data, specified in a sensor listener."],["sensor_error_func_t","Callback for reporting a sensor read error."],["sensor_event_type_t",""],["sensor_get_config_func_t","Get the configuration of the sensor for the sensor type.  This includes the value type of the sensor."],["sensor_handle_interrupt_t","Let driver handle interrupt in the sensor context"],["sensor_mgr_compare_func_t",""],["sensor_notifier_func_t","Callback for event notifications."],["sensor_read_func_t","Read a single value from a sensor, given a specific sensor type (e.g. SENSOR_TYPE_PROXIMITY)."],["sensor_reset_t","Reset Sensor function Ptr"],["sensor_set_config_func_t","Send a new configuration register set to the sensor."],["sensor_set_notification_t","Set the notification expectation for a targeted set of events for the specific sensor. After this function returns successfully, the implementer shall post corresponding event notifications to the sensor manager."],["sensor_set_trigger_thresh_t","Set the trigger and threshold values for a specific sensor for the sensor type."],["sensor_trigger_cmp_func_t","Callback for trigger compare functions."],["sensor_trigger_notify_func_t","Callback for sending trigger notification."],["sensor_type_t",""],["sensor_unset_notification_t","Unset the notification expectation for a targeted set of events for the specific sensor."]]});