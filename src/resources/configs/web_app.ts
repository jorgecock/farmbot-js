export interface WebAppConfig {
  id: number;
  device_id: number;
  created_at: string;
  updated_at: string;
  assertion_log: number;
  bot_origin_quadrant: number;
  busy_log: number;
  confirm_plant_deletion: boolean;
  confirm_sequence_deletion: boolean;
  confirm_step_deletion: boolean;
  debug_log: number;
  disable_animations: boolean;
  disable_emergency_unlock_confirmation: boolean;
  disable_i18n: boolean;
  discard_unsaved_sequences: boolean;
  discard_unsaved: boolean;
  display_trail: boolean;
  dynamic_map: boolean;
  enable_browser_speak: boolean;
  encoder_figure: boolean;
  error_log: number;
  expand_step_options: boolean;
  fun_log: number;
  hide_sensors: boolean;
  hide_webcam_widget: boolean;
  home_button_homing: boolean;
  info_log: number;
  legend_menu_open: boolean;
  map_size_x: number;
  map_size_y: number;
  photo_filter_begin: string;
  photo_filter_end: string;
  raw_encoders: boolean;
  scaled_encoders: boolean;
  show_farmbot: boolean;
  show_first_party_farmware: boolean;
  show_historic_points: boolean;
  show_images: boolean;
  show_motor_plot: boolean;
  show_pins: boolean;
  show_plants: boolean;
  show_points: boolean;
  show_sensor_readings: boolean;
  show_spread: boolean;
  stub_config: boolean;
  success_log: number;
  time_format_24_hour: boolean;
  user_interface_read_only_mode: boolean;
  warn_log: number;
  x_axis_inverted: boolean;
  xy_swap: boolean;
  y_axis_inverted: boolean;
  z_axis_inverted: boolean;
  zoom_level: number;
}

export type NumberConfigKey =
  | "id"
  | "device_id"
  | "assertion_log"
  | "busy_log"
  | "debug_log"
  | "error_log"
  | "fun_log"
  | "info_log"
  | "success_log"
  | "warn_log"
  | "bot_origin_quadrant"
  | "map_size_x"
  | "map_size_y"
  | "zoom_level";

export type StringConfigKey =
  | "created_at"
  | "photo_filter_begin"
  | "photo_filter_end"
  | "updated_at";

export type BooleanConfigKey =
  | "confirm_plant_deletion"
  | "confirm_sequence_deletion"
  | "confirm_step_deletion"
  | "disable_animations"
  | "disable_emergency_unlock_confirmation"
  | "disable_i18n"
  | "discard_unsaved_sequences"
  | "discard_unsaved"
  | "display_trail"
  | "dynamic_map"
  | "enable_browser_speak"
  | "encoder_figure"
  | "expand_step_options"
  | "hide_sensors"
  | "hide_webcam_widget"
  | "home_button_homing"
  | "legend_menu_open"
  | "raw_encoders"
  | "scaled_encoders"
  | "show_farmbot"
  | "show_first_party_farmware"
  | "show_historic_points"
  | "show_images"
  | "show_motor_plot"
  | "show_pins"
  | "show_plants"
  | "show_points"
  | "show_sensor_readings"
  | "show_spread"
  | "stub_config"
  | "time_format_24_hour"
  | "user_interface_read_only_mode"
  | "x_axis_inverted"
  | "xy_swap"
  | "y_axis_inverted"
  | "z_axis_inverted";
