initSidebarItems({"constant":[["OS_ALIGNMENT",""],["OS_DEV_F_INIT_CRITICAL",""],["OS_DEV_F_STATUS_OPEN",""],["OS_DEV_F_STATUS_READY",""],["OS_DEV_F_STATUS_SUSPENDED",""],["OS_DEV_INIT_F_CRITICAL",""],["OS_DEV_INIT_KERNEL",""],["OS_DEV_INIT_PRIMARY",""],["OS_DEV_INIT_PRIO_DEFAULT",""],["OS_DEV_INIT_SECONDARY",""],["OS_IDLE_PRIO",""],["OS_IDLE_STACK_SIZE",""],["OS_MEMPOOL_F_EXT",""],["OS_MEMPOOL_INFO_NAME_LEN",""],["OS_RUN_PRIV",""],["OS_RUN_UNPRIV",""],["OS_SANITY_STACK_SIZE",""],["OS_STACK_ALIGNMENT",""],["OS_STACK_PATTERN",""],["OS_STIME_MAX",""],["OS_TASK_FLAG_EVQ_WAIT",""],["OS_TASK_FLAG_MUTEX_WAIT",""],["OS_TASK_FLAG_NO_TIMEOUT",""],["OS_TASK_FLAG_SEM_WAIT",""],["OS_TASK_MAX_NAME_LEN",""],["OS_TASK_PRI_HIGHEST",""],["OS_TASK_PRI_LOWEST",""],["OS_TICKS_PER_SEC",""],["OS_TIMEOUT_NEVER",""],["OS_TIME_MAX",""],["OS_TRACE_ID_CALLOUT_INIT",""],["OS_TRACE_ID_CALLOUT_RESET",""],["OS_TRACE_ID_CALLOUT_STOP",""],["OS_TRACE_ID_CALLOUT_TICK",""],["OS_TRACE_ID_EVENTQ_GET",""],["OS_TRACE_ID_EVENTQ_GET_NO_WAIT",""],["OS_TRACE_ID_EVENTQ_POLL",""],["OS_TRACE_ID_EVENTQ_POLL_0TIMO",""],["OS_TRACE_ID_EVENTQ_PUT",""],["OS_TRACE_ID_EVENTQ_REMOVE",""],["OS_TRACE_ID_MBUF_FREE",""],["OS_TRACE_ID_MBUF_FREE_CHAIN",""],["OS_TRACE_ID_MBUF_GET",""],["OS_TRACE_ID_MBUF_GET_PKTHDR",""],["OS_TRACE_ID_MEMBLOCK_GET",""],["OS_TRACE_ID_MEMBLOCK_PUT",""],["OS_TRACE_ID_MEMBLOCK_PUT_FROM_CB",""],["OS_TRACE_ID_MUTEX_INIT",""],["OS_TRACE_ID_MUTEX_PEND",""],["OS_TRACE_ID_MUTEX_RELEASE",""],["OS_TRACE_ID_SEM_INIT",""],["OS_TRACE_ID_SEM_PEND",""],["OS_TRACE_ID_SEM_RELEASE",""],["OS_WAIT_FOREVER",""],["SYS_EACCES",""],["SYS_EAGAIN",""],["SYS_EALREADY",""],["SYS_EBUSY",""],["SYS_EDONE",""],["SYS_EINVAL",""],["SYS_EIO",""],["SYS_ENODEV",""],["SYS_ENOENT",""],["SYS_ENOMEM",""],["SYS_ENOTSUP",""],["SYS_EOK",""],["SYS_EPERUSER",""],["SYS_ERANGE",""],["SYS_EREMOTEIO",""],["SYS_ETIMEOUT",""],["SYS_EUNKNOWN",""],["os_error_OS_BAD_MUTEX",""],["os_error_OS_EBUSY",""],["os_error_OS_EINVAL",""],["os_error_OS_ENOENT",""],["os_error_OS_ENOMEM",""],["os_error_OS_ERROR",""],["os_error_OS_ERR_IN_ISR",""],["os_error_OS_ERR_PRIV",""],["os_error_OS_INVALID_PARM",""],["os_error_OS_MEM_NOT_ALIGNED",""],["os_error_OS_NOT_STARTED",""],["os_error_OS_OK",""],["os_error_OS_TIMEOUT",""],["os_task_state_OS_TASK_READY","Task is ready to run"],["os_task_state_OS_TASK_SLEEP","Task is sleeping"]],"fn":[["eventq_dflt_get","Retrieves the default event queue processed by OS main task."],["eventq_run","Pull a single item off the event queue and call it's event callback."],["os_arch_ctx_sw",""],["os_arch_in_critical",""],["os_arch_init",""],["os_arch_init_task_stack",""],["os_arch_os_init",""],["os_arch_os_start",""],["os_arch_restore_sr",""],["os_arch_save_sr",""],["os_arch_start",""],["os_arch_task_stack_init",""],["os_callout_init","Initialize a callout."],["os_callout_remaining_ticks","Returns the number of ticks which remains to callout."],["os_callout_reset","Reset the callout to fire off in 'ticks' ticks."],["os_callout_stop","Stop the callout from firing off, any pending events will be cleared."],["os_callout_tick","@cond INTERNAL_HIDDEN"],["os_callout_wakeup_ticks",""],["os_cputime_delay_nsecs","Wait until 'nsecs' nanoseconds has elapsed. This is a blocking delay. Not defined if OS_CPUTIME_FREQ_PWR2 is defined."],["os_cputime_delay_ticks","Wait until the number of ticks has elapsed. This is a blocking delay."],["os_cputime_delay_usecs","Wait until 'usecs' microseconds has elapsed. This is a blocking delay."],["os_cputime_get32","Returns the low 32 bits of cputime."],["os_cputime_init","Initialize the cputime module. This must be called after os_init is called and before any other timer API are used. This should be called only once and should be called before the hardware timer is used."],["os_cputime_nsecs_to_ticks","Converts the given number of nanoseconds into cputime ticks. Not defined if OS_CPUTIME_FREQ_PWR2 is defined."],["os_cputime_ticks_to_nsecs","Convert the given number of ticks into nanoseconds. Not defined if OS_CPUTIME_FREQ_PWR2 is defined."],["os_cputime_timer_init","Initialize a CPU timer, using the given HAL timer."],["os_cputime_timer_relative","Sets a cpu timer that will expire 'usecs' microseconds from the current cputime."],["os_cputime_timer_start","Start a cputimer that will expire at 'cputime'. If cputime has already passed, the timer callback will still be called (at interrupt context)."],["os_cputime_timer_stop","Stops a cputimer from running. The timer is removed from the timer queue and interrupts are disabled if no timers are left on the queue. Can be called even if timer is not running."],["os_default_irq_asm",""],["os_dev_close","Close a device."],["os_dev_create","Create a new device in the kernel."],["os_dev_initialize_all","Initialize all devices for a given state."],["os_dev_lookup","Lookup a device by name."],["os_dev_open","Open a device."],["os_dev_reset","Clears the device list.  This function does not close any devices or free any resources; its purpose is to allow a full system reset between unit tests."],["os_dev_resume","Resume the device operation."],["os_dev_resume_all","Resume all the devices that were suspended."],["os_dev_suspend","Suspend the operation of the device."],["os_dev_suspend_all","Suspend all devices."],["os_dev_walk","Walk through all devices, calling callback for every device."],["os_eventq_designate","@cond INTERNAL_HIDDEN [DEPRECATED]"],["os_eventq_get","Pull a single item from an event queue.  This function blocks until there is an item on the event queue to read."],["os_eventq_get_no_wait","Poll an event from the event queue and return it immediately. If no event is available, don't block, just return NULL."],["os_eventq_init","Initialize the event queue"],["os_eventq_inited","Check whether the event queue is initialized."],["os_eventq_poll","Poll the list of event queues specified by the evq parameter (size nevqs), and return the \"first\" event available on any of the queues.  Event queues are searched in the order that they are passed in the array."],["os_eventq_put","Put an event on the event queue."],["os_eventq_remove","Remove an event from the queue."],["os_free","Operating system level free().  See description of os_malloc() for reasoning."],["os_get_uptime","Get time since boot as os_timeval."],["os_get_uptime_usec","Get time since boot in microseconds."],["os_gettimeofday","Get the current time of day.  Returns the time of day in UTC into the tv argument, and returns the timezone (if set) into tz."],["os_idle_task","Idle operating system task, runs when no other tasks are running. The idle task operates in tickless mode, which means it looks for the next time an event in the system needs to run, and then tells the architecture specific functions to sleep until that time."],["os_info_init",""],["os_init","Initialize the OS, including memory areas and housekeeping functions. This calls into the architecture specific OS initialization."],["os_init_idle_task",""],["os_malloc","Operating system level malloc().   This ensures that a safe malloc occurs within the context of the OS.  Depending on platform, the OS may rely on libc's malloc() implementation, which is not guaranteed to be thread-safe. This malloc() will always be thread-safe."],["os_mbuf_adj","Adjust the length of a mbuf, trimming either from the head or the tail of the mbuf."],["os_mbuf_append","Append data onto a mbuf"],["os_mbuf_appendfrom","Reads data from one mbuf and appends it to another.  On error, the specified data range may be partially appended.  Neither mbuf is required to contain an mbuf packet header."],["os_mbuf_cmpf","Performs a memory compare of the specified region of an mbuf chain against a flat buffer."],["os_mbuf_cmpm","Compares the contents of two mbuf chains.  The ranges of the two chains to be compared are specified via the two offset parameters and the len parameter.  Neither mbuf chain is required to contain a packet header."],["os_mbuf_concat","Attaches a second mbuf chain onto the end of the first.  If the first chain contains a packet header, the header's length is updated.  If the second chain has a packet header, its header is cleared."],["os_mbuf_copydata",""],["os_mbuf_copyinto","Copies the contents of a flat buffer into an mbuf chain, starting at the specified destination offset.  If the mbuf is too small for the source data, it is extended as necessary.  If the destination mbuf contains a packet header, the header length is updated."],["os_mbuf_dup","Duplicate a chain of mbufs.  Return the start of the duplicated chain."],["os_mbuf_extend","Increases the length of an mbuf chain by the specified amount.  If there is not sufficient room in the last buffer, a new buffer is allocated and appended to the chain.  It is an error to request more data than can fit in a single buffer."],["os_mbuf_free","Release a mbuf back to the pool"],["os_mbuf_free_chain","Free a chain of mbufs"],["os_mbuf_get","Get an mbuf from the mbuf pool.  The mbuf is allocated, and initialized prior to being returned."],["os_mbuf_get_pkthdr","Allocate a new packet header mbuf out of the os_mbuf_pool."],["os_mbuf_len","@brief Calculates the length of an mbuf chain."],["os_mbuf_off","Locates the specified absolute offset within an mbuf chain.  The offset can be one past than the total length of the chain, but no greater."],["os_mbuf_pool_init","Initialize a pool of mbufs."],["os_mbuf_prepend","Increases the length of an mbuf chain by adding data to the front.  If there is insufficient room in the leading mbuf, additional mbufs are allocated and prepended as necessary.  If this function fails to allocate an mbuf, the entire chain is freed."],["os_mbuf_prepend_pullup","Prepends a chunk of empty data to the specified mbuf chain and ensures the chunk is contiguous.  If either operation fails, the specified mbuf chain is freed and NULL is returned."],["os_mbuf_pullup","Rearrange a mbuf chain so that len bytes are contiguous, and in the data area of an mbuf (so that OS_MBUF_DATA() will work on a structure of size len.)  Returns the resulting mbuf chain on success, free's it and returns NULL on failure."],["os_mbuf_trim_front","Removes and frees empty mbufs from the front of a chain.  If the chain contains a packet header, it is preserved."],["os_mbuf_widen","Increases the length of an mbuf chain by inserting a gap at the specified offset.  The contents of the gap are indeterminate.  If the mbuf chain contains a packet header, its total length is increased accordingly."],["os_memblock_from","Checks if a memory block was allocated from the specified mempool."],["os_memblock_get","Get a memory block from a memory pool"],["os_memblock_put","Puts the memory block back into the pool"],["os_memblock_put_from_cb","Puts the memory block back into the pool, ignoring the put callback, if any. This function should only be called from a put callback to free a block without causing infinite recursion."],["os_mempool_clear","Clears a memory pool."],["os_mempool_ext_init","Initializes an extended memory pool.  Extended attributes (e.g., callbacks) are not specified when this function is called; they are assigned manually after initialization."],["os_mempool_info_get_next","Get information about the next system memory pool."],["os_mempool_init","Initialize a memory pool."],["os_mempool_is_sane",""],["os_mempool_module_init",""],["os_mempool_unregister","Removes the specified mempool from the list of initialized mempools."],["os_mqueue_get","Remove and return a single mbuf from the mbuf queue.  Does not block."],["os_mqueue_init","Initializes an mqueue.  An mqueue is a queue of mbufs that ties to a particular task's event queue.  Mqueues form a helper API around a common paradigm: wait on an event queue until at least one packet is available, then process a queue of packets."],["os_mqueue_put","Adds a packet (i.e. packet header mbuf) to an mqueue. The event associated with the mqueue gets posted to the specified eventq."],["os_msys_count","Count the number of blocks in all the mbuf pools that are allocated."],["os_msys_get","Allocate a mbuf from msys.  Based upon the data size requested, os_msys_get() will choose the mbuf pool that has the best fit."],["os_msys_get_pkthdr","Allocate a packet header structure from the MSYS pool.  See os_msys_register() for a description of MSYS."],["os_msys_init",""],["os_msys_num_free","Return the number of free blocks in Msys"],["os_msys_register","MSYS is a system level mbuf registry.  Allows the system to share packet buffers amongst the various networking stacks that can be running simultaeneously."],["os_msys_reset","De-registers all mbuf pools from msys."],["os_mutex_init","Create a mutex and initialize it."],["os_mutex_pend","Pend (wait) for a mutex."],["os_mutex_release","Release a mutex."],["os_pkg_init",""],["os_realloc","Operating system level realloc(). See description of os_malloc() for reasoning."],["os_reboot","Reboots the system."],["os_sanity_check_init","Initialize a sanity check"],["os_sanity_check_register","Register a sanity check"],["os_sanity_check_reset","Reset the os sanity check, so that it doesn't trip up the sanity timer."],["os_sanity_init","@cond INTERNAL_HIDDEN"],["os_sanity_run",""],["os_sanity_task_checkin","Provide a \"task checkin\" for the sanity task."],["os_sched","Performs context switch if needed. If next_t is set, that task will be made running. If next_t is NULL, highest priority ready to run is swapped in. This function can be called when new tasks were made ready to run or if the current task is moved to sleeping state."],["os_sched_ctx_sw_hook",""],["os_sched_get_current_task","Returns the currently running task. Note that this task may or may not be the highest priority task ready to run."],["os_sched_insert",""],["os_sched_next_task",""],["os_sched_os_timer_exp","@cond INTERNAL_HIDDEN"],["os_sched_remove",""],["os_sched_resort",""],["os_sched_set_current_task",""],["os_sched_sleep",""],["os_sched_wakeup",""],["os_sched_wakeup_ticks",""],["os_sem_init","Initialize a semaphore"],["os_sem_pend","os sem pend"],["os_sem_release","Release a semaphore."],["os_set_env",""],["os_settimeofday","Set the time of day.  This does not modify os time, but rather just modifies the offset by which we are tracking real time against os time.  This function notifies all registered time change listeners."],["os_start","Start the OS and begin processing."],["os_started","Check whether or not the OS has been started."],["os_system_reset","Performs a system reset.  This is typically done at the end of a reboot procedure."],["os_task_count","Return the number of tasks initialized."],["os_task_info_get_next","Iterate through tasks, and return the following information about them:"],["os_task_remove","Removes specified task XXX NOTE: This interface is currently experimental and not ready for common use"],["os_tick_idle","Halt CPU for up to 'n' ticks."],["os_tick_init","Set up the periodic timer to interrupt at a frequency of 'os_ticks_per_sec'. 'prio' is the cpu-specific priority of the periodic timer interrupt."],["os_time_advance","Move OS time forward ticks."],["os_time_change_listen","Registers a time change listener.  Whenever the time is set, all registered listeners are notified.  The provided pointer is added to an internal list, so the listener's lifetime must extend indefinitely (or until the listener is removed)."],["os_time_change_remove","Unregisters a time change listener."],["os_time_delay","Puts the current task to sleep for the specified number of os ticks. There is no delay if ticks is 0."],["os_time_get","Get the current OS time in ticks"],["os_time_is_set",""],["os_time_ms_to_ticks","Converts milliseconds to OS ticks."],["os_time_ticks_to_ms","Converts OS ticks to milliseconds."],["task_init","Initialize a task."]],"static":[["os_main_stack",""],["os_main_task",""]],"struct":[["__IncompleteArrayField",""],["hal_timer","The HAL timer structure. The user can declare as many of these structures as desired. They are enqueued on a particular HW timer queue when the user calls the :c:func:`hal_timer_start()` or :c:func:`hal_timer_start_at()` API. The user must have called :c:func:`hal_timer_set_cb()` before starting a timer."],["hal_timer__bindgen_ty_1",""],["os_callout","Structure containing the definition of a callout, initialized by os_callout_init() and passed to callout functions."],["os_callout__bindgen_ty_1",""],["os_callout_list","@cond INTERNAL_HIDDEN"],["os_dev",""],["os_dev__bindgen_ty_1",""],["os_dev_handlers","Device handlers, implementers of device drivers should fill these out to control device operation."],["os_event","Structure representing an OS event.  OS events get placed onto the event queues and are consumed by tasks."],["os_event__bindgen_ty_1",""],["os_eventq",""],["os_eventq__bindgen_ty_1",""],["os_mbuf","Chained memory buffer."],["os_mbuf__bindgen_ty_1",""],["os_mbuf_pkthdr","A packet header structure that preceeds the mbuf packet headers."],["os_mbuf_pkthdr__bindgen_ty_1",""],["os_mbuf_pool","A mbuf pool from which to allocate mbufs. This contains a pointer to the os mempool to allocate mbufs out of, the total number of elements in the pool, and the amount of \"user\" data in a non-packet header mbuf. The total pool size, in bytes, should be:  os_mbuf_count * (omp_databuf_len + sizeof(struct os_mbuf))"],["os_mbuf_pool__bindgen_ty_1",""],["os_memblock","A memory block structure. This simply contains a pointer to the free list chain and is only used when the block is on the free list. When the block has been removed from the free list the entire memory block is usable by the caller."],["os_memblock__bindgen_ty_1",""],["os_mempool","Memory pool"],["os_mempool__bindgen_ty_1",""],["os_mempool__bindgen_ty_2",""],["os_mempool_ext",""],["os_mempool_info","Information describing a memory pool, used to return OS information to the management layer."],["os_mqueue","Structure representing a queue of mbufs."],["os_mqueue__bindgen_ty_1",""],["os_mutex","OS mutex structure"],["os_mutex__bindgen_ty_1",""],["os_sanity_check",""],["os_sanity_check__bindgen_ty_1",""],["os_sem","Structure representing an OS semaphore."],["os_sem__bindgen_ty_1",""],["os_stack",""],["os_task","@cond INTERNAL_HIDDEN"],["os_task__bindgen_ty_1",""],["os_task__bindgen_ty_2",""],["os_task__bindgen_ty_3",""],["os_task_info","Information about an individual task, returned for management APIs."],["os_task_list",""],["os_task_obj",""],["os_task_obj__bindgen_ty_1",""],["os_task_stailq","@cond INTERNAL_HIDDEN"],["os_time_change_info","Represents a time change.  Passed to time change listeners when the current time-of-day is set."],["os_time_change_listener","Time change listener.  Notified when the time-of-day is set."],["os_time_change_listener__bindgen_ty_1","Internal."],["os_timeval","Structure representing time since Jan 1 1970 with microsecond granularity"],["os_timezone","Structure representing a timezone offset"]],"type":[["__int16_t",""],["__int32_t",""],["__int64_t",""],["__uint16_t",""],["__uint32_t",""],["__uint8_t",""],["hal_timer_cb",""],["os_dev_close_func_t",""],["os_dev_init_func_t","Initialize a device."],["os_dev_open_func_t",""],["os_dev_resume_func_t",""],["os_dev_suspend_func_t",""],["os_error",""],["os_event_fn",""],["os_membuf_t",""],["os_mempool_put_fn","Block put callback function.  If configured, this callback gets executed whenever a block is freed to the corresponding extended mempool.  Note: The os_memblock_put() function calls this callback instead of freeing the block itself.  Therefore, it is the callback's responsibility to free the block via a call to os_memblock_put_from_cb()."],["os_sanity_check_func_t",""],["os_sr_t",""],["os_stack_t",""],["os_stime_t",""],["os_task_func_t",""],["os_task_state","Task states"],["os_time_change_fn","Callback that is executed when the time-of-day is set."],["os_time_t",""]]});