#!/usr/bin/perl
# bootup.cgi
# Create, enable or disable PPP startup at boot time

require './ppp-client-lib.pl';
&foreign_require("init", "init-lib.pl");
&ReadParse();

$start_cmd = "$module_config_directory/start.pl";
$stop_cmd = "$module_config_directory/stop.pl";

if ($in{'section'}) {
	# Create start and stop wrapper scripts
	&foreign_require("cron", "cron-lib.pl");
	&cron::create_wrapper($start_cmd, $module_name, "start.pl");
	&cron::create_wrapper($stop_cmd, $module_name, "stop.pl");

	# Enable starting at boot
	&init::enable_at_boot($module_name,
			      "Startup or shutdown PPP connection",
			      $start_cmd, $stop_cmd);
	$config{'boot'} = $in{'section'};
	}
else {
	# Disable starting at boot
	&init::disable_at_boot($module_name);
	delete($config{'boot'});
	}

# Save setting
&save_module_config();

&redirect("");

