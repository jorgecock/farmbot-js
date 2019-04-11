export interface WebAppConfig {
    id: number;
    device_id: number;
    created_at: string;
    updated_at: string;
    confirm_step_deletion: boolean;
    disable_animations: boolean;
    disable_i18n: boolean;
    display_trail: boolean;
    dynamic_map: boolean;
    encoder_figure: boolean;
    hide_webcam_widget: boolean;
    legend_menu_open: boolean;
    map_xl: boolean;
    raw_encoders: boolean;
    scaled_encoders: boolean;
    show_spread: boolean;
    show_farmbot: boolean;
    show_plants: boolean;
    show_points: boolean;
    x_axis_inverted: boolean;
    y_axis_inverted: boolean;
    z_axis_inverted: boolean;
    bot_origin_quadrant: number;
    zoom_level: number;
    success_log: number;
    busy_log: number;
    warn_log: number;
    error_log: number;
    info_log: number;
    fun_log: number;
    debug_log: number;
    stub_config: boolean;
    show_first_party_farmware: boolean;
    enable_browser_speak: boolean;
    show_images: boolean;
    photo_filter_begin: string;
    photo_filter_end: string;
    discard_unsaved: boolean;
    xy_swap: boolean;
    home_button_homing: boolean;
    show_motor_plot: boolean;
    show_historic_points: boolean;
    show_sensor_readings: boolean;
    time_format_24_hour: boolean;
}
export declare type NumberConfigKey = "id" | "bot_origin_quadrant" | "busy_log" | "debug_log" | "device_id" | "error_log" | "fun_log" | "info_log" | "success_log" | "warn_log" | "zoom_level";
export declare type StringConfigKey = "created_at" | "photo_filter_begin" | "photo_filter_end" | "updated_at";
export declare type BooleanConfigKey = "confirm_step_deletion" | "disable_animations" | "disable_i18n" | "discard_unsaved" | "display_trail" | "dynamic_map" | "enable_browser_speak" | "encoder_figure" | "hide_webcam_widget" | "home_button_homing" | "legend_menu_open" | "map_xl" | "raw_encoders" | "scaled_encoders" | "show_farmbot" | "show_first_party_farmware" | "show_historic_points" | "show_images" | "show_motor_plot" | "show_plants" | "show_points" | "show_sensor_readings" | "show_spread" | "stub_config" | "time_format_24_hour" | "x_axis_inverted" | "xy_swap" | "y_axis_inverted" | "z_axis_inverted";
