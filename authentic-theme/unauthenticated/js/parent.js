/*!
 * Authentic Theme 18.48 (https://github.com/qooob/authentic-theme)
 * Copyright 2014-2017 Ilia Rostovtsev <programming@rostovtsev.ru>
 * Licensed under MIT (https://github.com/qooob/authentic-theme/blob/master/LICENSE)
 */
;
if ($access_level == 0) {
    if (settings_side_slider_enabled && settings_side_slider_fixed) {
        t__wi_p.$("html").attr("data-slider-fixed", "1")
    }
}
if (t__wi_p.$___________initial === 1) {
    console.log("Welcome to Authentic Theme " + ($g__t__gver ? $g__t__gver : $g__t__ver) + "\nhttps://github.com/qooob/authentic-theme")
}
typeof t__wi_p.t___p__xhr_l == "undefined" ? t__wi_p.t___p__xhr_l = 0 : false;
typeof t__wi_p.t___p__ll == "undefined" ? t__wi_p.t___p__ll = 0 : false;
$(function() {
    t___wi.parent.$___________left = 1
});
t__wi_p.$("body").on("focus", ".sidebar-search", function() {
    if (typeof t__wi_p.$('iframe[name="page"]').get(0).contentWindow.t__au__c___i == "function") {
        t__wi_p.$('iframe[name="page"]').get(0).contentWindow.t__au__c___i("c", false)
    } else {
        t__wi_p.t__au__c___i("c", false)
    }
});
t__wi_p.$("body").on("blur", ".sidebar-search", function() {
    setTimeout(function() {
        t__wi_p.t__au__c___i("c", true)
    }, 150)
});

function __si__bg_upd_exec() {
    if (t__wi_p.$___ajax_requested_url.indexOf("?xhr-buttons=1") > -1 || t__wi_p.$___ajax_requested_url.indexOf("?xhr-navigation=1") > -1) {
        return
    }
    if (t__wi_p.$('iframe[name="page"]').contents().find("body .modal.in").length) {
        return
    }
    if ($access_level == 0) {
        t__wi_p.$___ajax_requested_url = "/index.cgi/?xhr-info=1";
        var d = t__wi_p.$('iframe[name="page"]').contents().find("body").find(".page.__sytem_information"),
            a = (d.length && __num()) ? d : 0;
        if (!$("#right-side-tabs-sysinfo .graph-container").length) {
            $("#right-side-tabs .info-container").html(get_right_panel_sysinfo_data())
        }
        if (a) {
            $(a).find('h3 > a[data-refresh="system-status"]').addClass("disabled").find("i").addClass("fa-spin")
        }
        var c = $(".right-side-tabs-dismiss .fa-reload");
        c.addClass("fa-spin-fast");
        setTimeout(function() {
            c.removeClass("fa-spin-fast")
        }, 3000);
        $.ajax({
            type: "GET",
            url: $_____link_full + "/index.cgi/?xhr-info=1",
            data: false,
            dataType: "json",
            success: function(e) {
                $.each(e, function(o, s) {
                    if (o == "cpu_percent" || o == "mem_percent" || o == "virt_percent" || o == "disk_percent") {
                        if (is_numeric(s)) {
                            localStorage.setItem($hostname + "-sysinfo_" + o + "_stats", s)
                        } else {
                            localStorage.setItem($hostname + "-sysinfo_" + o + "_stats", "")
                        }
                    } else {}
                    if (a) {
                        $(a).find('span[data-id="sysinfo_' + o + '"]').html(s);
                        if (o == "local_time" || o == "uptime" || o == "running_proc") {
                            var g = $(a).find('span[data-id="sysinfo_' + o + '"]'),
                                r = $(a).find('span[data-id="sysinfo_' + o + '"] a'),
                                t = $(a).find('span[data-id="sysinfo_' + o + '"]').text();
                            if (o == "local_time" && settings_window_replace_timestamps) {
                                if (r && r.length) {
                                    t = $(a).find('span[data-id="sysinfo_' + o + '"] a').data("convertible-timestamp-full");
                                    g.html(r.html(moment.unix(t).format(settings_window_replaced_timestamp_format_full)))
                                } else {
                                    t = $(a).find('span[data-id="sysinfo_' + o + '"] > span').data("convertible-timestamp-full");
                                    g.html(moment.unix(t).format(settings_window_replaced_timestamp_format_full))
                                }
                            } else {
                                (r && r.length) && g.html(r.html(t))
                            }
                        }
                        if ($(a).find('.piechart[data-charts="sysinfo_' + o + '"]').length) {
                            var k = t__wi_p.$('iframe[name="page"]').get(0),
                                j = (typeof t__wi_p.$('iframe[name="page"]').get(0).contentWindow.$ === "function"),
                                h = (j ? t__wi_p.$('iframe[name="page"]').get(0).contentWindow.$("body").find('.piechart[data-charts="sysinfo_' + o + '"]') : 0);
                            if (k && k.contentWindow && h.length) {
                                h.data("easyPieChart").update(s)
                            }
                        }
                        if (o == "cpu_percent" || o == "mem_percent" || o == "virt_percent" || o == "disk_percent") {
                            localStorage.setItem($hostname + "-sysinfo_" + o + "_seen", s)
                        }
                        $(a).find(".modal-backdrop").remove()
                    }
                    $__id__ = moment().unix();
                    if (o == "cpu_percent" || o == "mem_percent" || o == "virt_percent" || o == "disk_percent" || o == "csf_title" || o == "csf_remote_version" || o == "authentic_remote_version" || o == "package_message") {
                        if (!localStorage.getItem($hostname + "-sysinfo_" + o)) {
                            localStorage.setItem($hostname + "-sysinfo_" + o, s)
                        }
                    } else {
                        if (s == null || s == NaN) {
                            localStorage.setItem($hostname + "-sysinfo_" + o, "")
                        } else {
                            localStorage.setItem($hostname + "-sysinfo_" + o, s)
                        }
                    }
                    if (!localStorage.getItem($hostname + "-sysinfo_package_message_initial")) {
                        localStorage.setItem($hostname + "-sysinfo_package_message_initial", 1)
                    }
                    if (o == "authentic_theme_version") {
                        if (!localStorage.getItem($hostname + "-sysinfo_theme_current_version") && s) {
                            localStorage.setItem($hostname + "-sysinfo_theme_current_version", (s.match(/^\d+|\d+\b|\d+(?=\w)/g)[0] + "." + s.match(/^\d+|\d+\b|\d+(?=\w)/g)[1]))
                        }
                    }
                    if (o == "csf_data") {
                        if (!localStorage.getItem($hostname + "-sysinfo_csf_current_version") && s) {
                            localStorage.setItem($hostname + "-sysinfo_csf_current_version", (s.match(/^\d+|\d+\b|\d+(?=\w)/g)[0] + "." + s.match(/^\d+|\d+\b|\d+(?=\w)/g)[1]))
                        }
                    }
                    if (o == "csf_title" || o == "csf_remote_version" || o == "authentic_remote_version" || o == "package_message") {
                        if (o == "package_message" && (localStorage.getItem($hostname + "-sysinfo_" + o) != s || localStorage.getItem($hostname + "-sysinfo_package_message_initial") == 1) && s && s.indexOf("badge-danger") > -1) {
                            var w = lang("theme_xhred_notifications_packages_updates"),
                                q = ($(s).html().replace(/badge-danger/g, "badge-success"));
                            localStorage.setItem($hostname + "-notifications_" + $__id__ + "_package_message", JSON.stringify({
                                title: w,
                                time: $__id__,
                                timestamp: $__id__,
                                message: q,
                                readStatus: 0,
                                type: o,
                                link: $(s).attr("href")
                            }));
                            localStorage.setItem($hostname + "-sysinfo_" + o, s);
                            localStorage.setItem($hostname + "-sysinfo_package_message_initial", 0);
                            f__g_notifications(w, q, o)
                        } else {
                            if (o === "package_message") {
                                localStorage.setItem($hostname + "-sysinfo_" + o, s)
                            }
                        }
                        if (settings_sysinfo_theme_updates) {
                            if (localStorage.getItem($hostname + "-sysinfo_authentic_remote_version") == 0) {
                                localStorage.removeItem($hostname + "-sysinfo_authentic_remote_version")
                            }
                            if (localStorage.getItem($hostname + "-sysinfo_theme_current_version") && localStorage.getItem($hostname + "-sysinfo_authentic_remote_version")) {
                                if (o == "authentic_remote_version" && localStorage.getItem($hostname + "-sysinfo_theme_current_version") < s && s != "0" && s != "0.00" && s != null) {
                                    var n = lang("theme_xhred_notifications_theme_update"),
                                        f = lang("theme_xhred_notifications_theme_update_message").replace("%v", s) + '&nbsp;&nbsp;<span class="label label-success authentic_update" style="padding:0 6px; line-height: 12px; height:15px;font-size:11px" href="' + $_____link_full + '/webmin/edit_themes.cgi"></span>';
                                    localStorage.setItem($hostname + "-notifications_" + $__id__ + "_authentic_remote_version", JSON.stringify({
                                        title: n,
                                        time: $__id__,
                                        timestamp: $__id__,
                                        message: f,
                                        readStatus: 0,
                                        type: o,
                                        link: $_____link_full + "/sysinfo.cgi"
                                    }));
                                    localStorage.setItem($hostname + "-sysinfo_" + o, s);
                                    localStorage.setItem($hostname + "-sysinfo_theme_current_version", s);
                                    f__g_notifications(n, f, o)
                                }
                            }
                        }
                        if (settings_sysinfo_csf_updates) {
                            if (localStorage.getItem($hostname + "-sysinfo_csf_current_version") && localStorage.getItem($hostname + "-sysinfo_csf_current_version") != null && localStorage.getItem($hostname + "-sysinfo_csf_remote_version")) {
                                if (o == "csf_remote_version" && localStorage.getItem($hostname + "-sysinfo_csf_current_version") < s && s != "0" && s != "0.00" && s != null) {
                                    var u = lang("theme_xhred_notifications_firewall_update"),
                                        m = lang("theme_xhred_notifications_firewall_update_message").replace("%v", s);
                                    localStorage.setItem($hostname + "-notifications_" + $__id__ + "_csf_remote_version", JSON.stringify({
                                        title: u,
                                        time: $__id__,
                                        timestamp: $__id__,
                                        message: m,
                                        readStatus: 0,
                                        type: o,
                                        link: $_____link_full + "/csf"
                                    }));
                                    localStorage.setItem($hostname + "-sysinfo_" + o, s);
                                    localStorage.setItem($hostname + "-sysinfo_csf_current_version", s);
                                    f__g_notifications(u, m, o)
                                }
                            }
                        }
                        if (o == "csf_title" && s && s.indexOf("label-danger") > -1 && localStorage.getItem($hostname + "-sysinfo_csf_not_running") != 1) {
                            var p = lang("theme_xhred_notifications_firewall_danger"),
                                v = lang("theme_xhred_notifications_firewall_danger_message").replace("%v", moment.unix($__id__).format(settings_window_replaced_timestamp_format_short));
                            localStorage.setItem($hostname + "-notifications_" + $__id__ + "_csf_title", JSON.stringify({
                                title: p,
                                time: $__id__,
                                timestamp: $__id__,
                                message: v,
                                readStatus: 0,
                                type: o,
                                link: $_____link_full + "/csf"
                            }));
                            localStorage.setItem($hostname + "-sysinfo_csf_not_running", 1);
                            f__g_notifications(p, v, "csf_remote_version")
                        } else {
                            if (o == "csf_title" && s && s.indexOf("label-danger") === -1) {
                                localStorage.removeItem($hostname + "-sysinfo_csf_not_running")
                            }
                        }
                    }
                    if (o == "csf_deny") {
                        var l = JSON.parse(s);
                        $.each(l, function(F, C) {
                            var C = C.split("|"),
                                G = C[0],
                                y = C[1],
                                I = C[2],
                                x = C[3],
                                E = C[4],
                                z = C[5],
                                D = C[6],
                                B = C[7];
                            B = B.replace("*Port Scan*", ((I && x) ? 'Port <i data-port-href="http://www.speedguide.net/port.php?port=' + x + '" class="badge bg-dark-red">' + x + "</i> scan" : "Port scan"));
                            if (!localStorage.getItem($hostname + "-allowed_trigger_" + (G + y.replace(/\./g, "0")) + "_csf_deny")) {
                                var H = lang("theme_xhred_notifications_firewall_warning"),
                                    A = B + ((I && x) ? " <span>(" + I + ":" + x + ")</span>" : "");
                                localStorage.setItem($hostname + "-notifications_" + (G + y.replace(/\./g, "0")) + "_csf_deny", JSON.stringify({
                                    title: H,
                                    time: $__id__,
                                    timestamp: $__id__,
                                    message: A,
                                    readStatus: 0,
                                    type: o,
                                    link: $_____link_full + "/csf"
                                }));
                                localStorage.setItem($hostname + "-allowed_trigger_" + (G + y.replace(/\./g, "0")) + "_csf_deny", 1)
                            }
                        })
                    }
                    if (o == "cpu_percent" || o == "mem_percent" || o == "virt_percent" || o == "disk_percent") {
                        if (localStorage.getItem($hostname + "-sysinfo_" + o + "_seen") !== null && s >= 85 && localStorage.getItem($hostname + "-sysinfo_" + o + "_seen") < s) {}
                    }
                    setTimeout(function() {
                        if (localStorage.getItem($hostname + "-sysinfo_cpu_percent_stats") || localStorage.getItem($hostname + "-sysinfo_mem_percent_stats") || localStorage.getItem($hostname + "-sysinfo_virt_percent_stats") || localStorage.getItem($hostname + "-sysinfo_disk_percent_stats")) {
                            if ($("#right-side-tabs-sysinfo .graph-container").length) {
                                var D = !localStorage.getItem($hostname + "-sysinfo_" + o + "_stats"),
                                    C = $(".info-container .graph-container." + o + "");
                                D ? C.addClass("hidden").prev("br").addClass("hidden") : C.removeClass("hidden").prev("br").removeClass("hidden");
                                if (o == "cpu_percent") {
                                    $("#right-side-tabs-sysinfo .graph-container." + o + " .description").attr("title", localStorage.getItem($hostname + "-sysinfo_load")).text("" + lang("theme_xhred_global_cpu_load") + ": " + localStorage.getItem($hostname + "-sysinfo_cpu_percent_stats") + "% (" + localStorage.getItem($hostname + "-sysinfo_load") + ")");
                                    $("#right-side-tabs-sysinfo .graph-container." + o + " .bar").attr("style", "width:" + localStorage.getItem($hostname + "-sysinfo_cpu_percent_stats") + "%")
                                }
                                if (o == "mem_percent") {
                                    $("#right-side-tabs-sysinfo .graph-container." + o + " .description").attr("title", localStorage.getItem($hostname + "-sysinfo_real_memory")).text("" + lang("body_real") + ": " + localStorage.getItem($hostname + "-sysinfo_mem_percent_stats") + "% (" + localStorage.getItem($hostname + "-sysinfo_real_memory") + ")");
                                    $("#right-side-tabs-sysinfo .graph-container." + o + " .bar").attr("style", "width:" + localStorage.getItem($hostname + "-sysinfo_mem_percent_stats") + "%")
                                }
                                if (o == "virt_percent") {
                                    $("#right-side-tabs-sysinfo .graph-container." + o + " .description").attr("title", localStorage.getItem($hostname + "-sysinfo_virtual_memory")).text("" + lang("body_virt") + ": " + localStorage.getItem($hostname + "-sysinfo_virt_percent_stats") + "% (" + localStorage.getItem($hostname + "-sysinfo_virtual_memory") + ")");
                                    $("#right-side-tabs-sysinfo .graph-container." + o + " .bar").attr("style", "width:" + localStorage.getItem($hostname + "-sysinfo_virt_percent_stats") + "%")
                                }
                                if (o == "disk_percent") {
                                    $("#right-side-tabs-sysinfo .graph-container." + o + " .description").attr("title", localStorage.getItem($hostname + "-sysinfo_disk_space")).text("" + lang("body_disk") + ": " + localStorage.getItem($hostname + "-sysinfo_disk_percent_stats") + "% (" + localStorage.getItem($hostname + "-sysinfo_disk_space") + ")");
                                    $("#right-side-tabs-sysinfo .graph-container." + o + " .bar").attr("style", "width:" + localStorage.getItem($hostname + "-sysinfo_disk_percent_stats") + "%")
                                }
                            }
                        }
                        $('#right-side-tabs .info-container .info-list-data span[data-data="' + o + '"]').html(s);
                        if (o == "package_message") {
                            $('#right-side-tabs .info-container .info-list-data span[data-data="' + o + '"]').html($(s).html($(s).html().split(",")[0])[0].outerHTML)
                        }
                        if (o == "local_time" && settings_window_replace_timestamps) {
                            var F = $('#right-side-tabs .info-container .info-list-data span[data-data="' + o + '"] a');
                            if (F && F.length) {
                                F.html(F.next("span").detach())
                            }
                            var B = t__wi_p.$(".info-container").find("span[data-convertible-timestamp-full]"),
                                E = B.attr("data-convertible-timestamp-full");
                            B.html(moment.unix(E).format(settings_window_replaced_timestamp_format_full))
                        }
                        if (o == "cpu_temperature") {
                            var y = 0;
                            $.each($(s).filter(".badge-cpustatus"), function(J, K) {
                                var I = parseInt($(this).text().split(":")[1]),
                                    L = (I <= 30 ? "--bg-info" : (I > 30 && I <= 60 ? "--bg-success" : (I > 60 && I <= 80) ? "bg-warning" : (I > 80) ? "bg-danger" : "")),
                                    M = $(this).text().indexOf("°C") > -1;
                                if (!M) {
                                    L = (I <= 86 ? "--bg-info" : (I > 86 && I <= 140 ? "--bg-success" : (I > 140 && I <= 176) ? "bg-warning" : (I > 176) ? "bg-danger" : ""))
                                }
                                if (L == "bg-warning" || L == "bg-danger") {
                                    y = 1
                                }
                                if (!$("#right-side-tabs .info-container .badge-drivestatus.badge-cpustatus").length) {
                                    $('strong[data-stats="cpu"] + br[data-stats="cpu"]').after(s.replace(/<br>|&nbsp;/gi, ""))
                                }
                                $($("#right-side-tabs .info-container .badge-drivestatus.badge-cpustatus")[J]).html($(this).text()).removeClass((function(N, O) {
                                    return (O.match(/(^|\s)bg-\S+/g) || []).join(" ")
                                })).addClass(L)
                            }).promise().done(function() {
                                if (y) {
                                    $('[data-stats="cpu"]').removeClass("hidden")
                                } else {
                                    $('[data-stats="cpu"]').addClass("hidden")
                                }
                            })
                        }
                        if (o == "hdd_temperature") {
                            var z = 0;
                            $.each($(s), function(J, K) {
                                var I = parseInt($(this).text().split(":")[1]),
                                    L = (I <= 30 ? "--bg-info" : (I > 30 && I <= 60 ? "--bg-success" : (I > 60 && I <= 80) ? "bg-warning" : (I > 80) ? "bg-danger" : "")),
                                    M = $(this).text().indexOf("°C") > -1;
                                if (!M) {
                                    L = (I <= 86 ? "--bg-info" : (I > 86 && I <= 140 ? "--bg-success" : (I > 140 && I <= 176) ? "bg-warning" : (I > 176) ? "bg-danger" : ""))
                                }
                                if (L == "bg-warning" || L == "bg-danger") {
                                    z = 1
                                }
                                if (!$("#right-side-tabs .info-container .badge-drivestatus:not(.badge-cpustatus)").length) {
                                    $('strong[data-stats="drive"] + br[data-stats="drive"]').after(s.replace(/<br>|&nbsp;/gi, ""))
                                }
                                $($("#right-side-tabs .info-container .badge-drivestatus:not(.badge-cpustatus)")[J]).html($(this).text()).removeClass((function(N, O) {
                                    return (O.match(/(^|\s)bg-\S+/g) || []).join(" ")
                                })).addClass(L)
                            }).promise().done(function() {
                                if (z) {
                                    $('[data-stats="drive"]').removeClass("hidden")
                                } else {
                                    $('[data-stats="drive"]').addClass("hidden")
                                }
                            })
                        }
                        if (o == "uptime" || o == "running_proc") {
                            var F = $('#right-side-tabs .info-container .info-list-data span[data-data="' + o + '"] a');
                            if (F && F.length) {
                                var A = F.parent(),
                                    H = A.text();
                                A.html(F.text(H))
                            }
                        }
                        if (o == "warning_si") {
                            var x = $("#right-side-tabs .info-container .warning-list-data");
                            x.html(s.replace(/<(script|link|meta)\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/(script|link|meta)>/gi, "").replace("type='submit'", "formtarget='page' type='submit'").replace("class='ui_submit", "class='ui_submit btn btn-default btn-xs").replace('ui_form_end_submit" type="button"', 'ui_form_end_submit" type="submit" formtarget="page"').replace("ui_form_end_submit", "ui_form_end_submit btn-tiny"));
                            ((s == "<br>") && x.empty())
                        }
                        if (o == "extended_si") {
                            var x = $("#right-side-tabs .info-container .extended-list-data");
                            var G = (s.replace(/aria-expanded="true"/gi, 'aria-expanded="false"').replace(/collapse in/gi, "collapse"));
                            opened_tabs = $("#extended_sysinfo .panel .in").map(function() {
                                G = (G.replace('data-toggle="collapse" href="#' + this.id + '" aria-expanded="false" aria-controls="' + this.id + '"', 'data-toggle="collapse" href="#' + this.id + '" aria-expanded="true" aria-controls="' + this.id + '"'));
                                G = (G.replace('div id="' + this.id + '" class="panel-collapse collapse"', 'div id="' + this.id + '" class="panel-collapse collapse in"'))
                            }).promise().done(function() {
                                x.html('<div style="height: 11px"></div>' + G);
                                var I = $("#right-side-tabs .extended-list-data");
                                I.find("div.panel-heading:not(#status_services-status):not(#status-virtual-server):not(#acl_logins-acl):not(#sysinfo-virtual-server):not(#quota-virtual-server):not(#bw-virtual-server)").parent().remove();
                                $.each(I.find("div.panel-heading .panel-title"), function() {
                                    var K = $(this).find("a"),
                                        J = $(this).find("a").attr("aria-expanded") != "true" ? 1 : 0,
                                        L = (J ? "+" : "—");
                                    $(this).append('<span class="pull-right panel-title-status' + (J ? " margined-right-2" : "") + '">' + L + "</span>");
                                    K.text(upperFirst($.trim(K.text())))
                                });
                                I.find(".panel.panel-default").detach().appendTo("#right-side-tabs #extended_sysinfo");
                                I.find("div.panel-body").find("img").remove();
                                I.find("a").attr("target", "page");
                                I.find('input[type="submit"]').addClass("btn btn-default btn-xs");
                                I.find('input[type="submit"]').parents("form").attr("formtarget", "page");
                                I.find('button[type="button"].ui_submit').addClass("btn btn-default btn-xs");
                                I.find('button[type="button"].ui_submit').parents("form").attr("formtarget", "page");
                                $("#extended_sysinfo .panel").on("show.bs.collapse", function() {
                                    $(this).find(".panel-title-status").removeClass("margined-right-2").text("—")
                                }).on("hide.bs.collapse", function() {
                                    $(this).find(".panel-title-status").addClass("margined-right-2").text("+")
                                })
                            })
                        }
                        if ($.trim($(".info-list-data").text()).length) {
                            setTimeout(function() {
                                $("#right-side-tabs .is-sysinfo_data").removeClass("hidden");
                                $("#right-side-tabs .no-sysinfo_data").addClass("hidden")
                            }, 100)
                        }
                    }, 101)
                });
                setTimeout(function() {
                    t__wi_p.$___ajax_requested_url = "_blank"
                }, 500);
                setTimeout(function() {
                    n___ck()
                }, 3000);
                if (a) {
                    $(a).find('h3 > a[data-refresh="system-status"]').removeClass("disabled").find("i").removeClass("fa-spin")
                }
            }
        })
    }
}

function __si__bg_upd() {
    setTimeout(function() {
        __si__bg_upd_exec()
    }, 5000);
    if (settings_side_slider_enabled && !t__wi_p.$('iframe[name="page"]').contents().find("body .modal.in").length) {
        return t___wi.setInterval(function() {
            __si__bg_upd_exec()
        }, (settings_side_slider_background_refresh_time * 60000))
    }
}
var __si__bg_upd_id = __si__bg_upd();
if (settings_loader_top) {
    if (typeof NProgress == "object") {
        NProgress.configure({
            showSpinner: true,
            trickleRate: 0.08,
            trickleSpeed: 200
        })
    }
}
$(window).ajaxStart(function() {
    if (t__wi_p.$___ajax_requested_url.indexOf("index.cgi/?xhr-info=1") === -1 && t__wi_p.$___ajax_requested_url.indexOf("___LL_PREV___") === -1) {
        t___p__xhr_l = 1;
        t__wi_p.__lls()
    }
}).ajaxStop(function() {
    if (t__wi_p.$___ajax_requested_url.indexOf("index.cgi/?xhr-info=1") === -1) {
        t___p__xhr_l = 0;
        t__wi_p.__lle()
    }
});
(function() {
    if (typeof t___wi.Messenger.Message != "function") {
        return
    }
    var j, h, k, g = {}.hasOwnProperty,
        e = function(a, d) {
            for (var f in d) {
                if (g.call(d, f)) {
                    a[f] = d[f]
                }
            }

            function c() {
                this.constructor = a
            }
            c.prototype = d.prototype;
            a.prototype = new c();
            a.__super__ = d.prototype;
            return a
        };
    j = jQuery;
    k = '<div class="messenger-spinner">\n    <span class="messenger-spinner-side messenger-spinner-side-left">\n        <span class="messenger-spinner-fill"></span>\n    </span>\n    <span class="messenger-spinner-side messenger-spinner-side-right">\n        <span class="messenger-spinner-fill"></span>\n    </span>\n</div>';
    h = (function(c) {
        e(a, c);

        function a() {
            return a.__super__.constructor.apply(this, arguments)
        }
        a.prototype.template = function(d) {
            var f;
            f = a.__super__.template.apply(this, arguments);
            f.append(j(k));
            return f
        };
        return a
    })(t___wi.Messenger.Message);
    t___wi.Messenger.themes.air = {
        Message: h
    };
    Messenger.options = {
        extraClasses: "messenger-fixed messenger-on-bottom",
        theme: "air"
    }
}).call(this);
if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    $("#content").attr("style", "-webkit-overflow-scrolling: touch !important; overflow-y: scroll !important;")
}
if (t__wi_p.$('a[target="page"][href="link/"]').first().length) {
    t__wi_p.$('a[target="page"][href="link/"]').first().attr("target", "blank")
}
$("aside").on("click", ".select2-container .select2-selection__arrow b", function(a) {
    a.preventDefault();
    a.stopPropagation()
});
$("body").on("keydown", ".sidebar-search", function(c) {
    if (t__wi_p.$("#wrapper").data("webmail") !== -1) {
        if (c.keyCode == 13) {
            c.preventDefault();
            return false
        }
    }
});
$("body").on("click", ".mobile-menu-toggler", function(c) {
    $this = $(this);
    if ($("aside").hasClass("hidden-xs")) {
        $(this).addClass("selected").find("button").addClass("btn-primary").removeClass("btn-default");
        if (t__wi_p.$(".__logo")) {
            t__wi_p.$(".__logo").css("transform", "translate(0px, 0px)");
            setTimeout(function() {
                t__wi_p.$(".__logo").transition({
                    y: "-140px"
                }, 1000)
            }, 1100)
        }
        t__wi_p.$this.css("transform", "translate(0px, 0px)");
        t__wi_p.$("aside").css("transform", "translate(0px, 0px)");
        t__wi_p.$(".switch-toggle").css("display", "none");
        $("aside").removeClass("hidden-xs");
        t__wi_p.$("aside, .mobile-menu-toggler").transition({
            x: settings_leftmenu_width
        }, 1000);
        t__wi_p.$(".switch-toggle").css("display", "table")
    } else {
        hide_mobile_menu()
    }
});
$.each($('ul.navigation li.navigation_external a[href^="../servers/link.cgi/"]'), function(d, c) {
    $(this).attr("href", $__source_url + $(this).attr("href").replace("../", "").replace(/\/$/g, ""))
});
$("body").on("click", '.navigation a[target="page"], .user-links a[target="page"]', function() {
    hide_mobile_menu()
});
$("body").on("click", ".navigation > li .navigation_external_link", function(a) {
    a.preventDefault();
    a.stopPropagation();
    b = $(this);
    window.open(b.attr("href"), "_blank")
});
$("body").on("click", ".navigation > li:not('.sub-wrapper'):not('.menu-container'):not('.navigation_external')", function(g) {
    g.preventDefault();
    g.stopPropagation();
    t__wi_p.$___________m_locked = 1;
    typeof $processing == "undefined" ? $processing = false : false;
    if (!$processing) {
        $processing = true;
        var f = $("a", this).attr("href"),
            h = $("a", this).attr("target"),
            e = $(this);
        if (h) {
            $(".navigation > li > ul.sub > li").each(function() {
                $(this).removeClass("sub_active").find("span.current").remove()
            })
        }
        $("#webmin_search_form").submit(function() {
            $(".navigation > li > ul.sub > li").each(function() {
                $(this).removeClass("sub_active").find("span.current").remove()
            })
        });
        $.when($("#sidebar .navigation > li").each(function() {
            var a = $(this);
            if (!$(this).is(e)) {
                $(this).removeClass("active");
                if ($(this).find("a").attr("href") != "#search" && !$(this).find("a").attr("target")) {
                    if ($(a.find("a").attr("href")).hasClass("sub")) {
                        $(a.find("a").attr("href")).slideUp($settings_animation_left_slide_time)
                    }
                }
            }
        })).done(function() {
            e.hasClass("active") ? e.removeClass("active") : (f != "#hide" && !h) ? e.addClass("active") : false;
            setTimeout(function() {
                if ($(f).is(":visible") && f != "#hide" && !h) {
                    e.addClass("active")
                } else {
                    e.removeClass("active")
                }
                $processing = false
            }, ((2 * $settings_animation_left_slide_time) > 0 ? (2 * $settings_animation_left_slide_time) : 1));
            $(f).slideToggle($settings_animation_left_slide_time)
        });
        if (f == "#search") {
            $('#sidebar input[name="search"]').focus()
        }
    }
});
$("body").on("click", ".navigation > li > ul.sub > li:not('.menu-container')", function(d) {
    if (d.target && $(d.target).is("li")) {
        return
    }
    var c = $(this);
    if (__num()) {
        t__wi_p.$(".navigation > li:not('.has-sub')").removeClass("sub_active").find("span.current-large").remove()
    }
    $(".navigation > li > ul.sub > li").each(function() {
        $(this).removeClass("sub_active").find("span.current").remove()
    });
    $("#webmin_search_form").find('input[name="search"]').val("");
    c.addClass("sub_active").append('<span class="current"></span>')
});
$(".navigation > li > ul.sub").each(function() {
    if ($(this).attr("id") === "") {
        $(this).remove()
    }
});
$("body").on("submit", "#webmin_search_form", function() {});
$("body").on("click", ".navigation_module_trigger", function(c) {
    c.preventDefault();
    c.stopPropagation();
    $('iframe[name="page"]').attr("src", $(this).data("href"));
    $(".navbar-toggle:visible").trigger("click");
    t__wi_p.$(".navigation > li > ul.sub > li").removeClass("sub_active").find("span.current").remove();
    t__wi_p.$("#sidebar .navigation > ul.sub").slideUp($settings_animation_left_slide_time);
    t__wi_p.$("#sidebar .navigation > li").removeClass("active")
});
$('.switch-toggle label[for^="reserve_empty"]').on("click", function(c) {
    c.preventDefault()
});
$("body").on("click", 'a[data-refresh="true"]', function(c) {
    c.preventDefault();
    if (typeof t__wi_p.$('iframe[name="page"]') != "undefined" && t__wi_p.$('iframe[name="page"]').contents() && t__wi_p.$('iframe[name="page"]').contents().get(0)) {
        t__wi_p.$('iframe[name="page"]').contents().get(0).location.reload()
    }
});
$("body").on("click", function(c) {
    if (!$("ul.dropdown").is(c.target) && $("ul.dropdown").has(c.target).length === 0 && $(".open").has(c.target).length === 0) {
        $("ul.dropdown").removeClass("open")
    }
});
$(t__wi_p.$('iframe[name="page"]').contents()).on("click", function(c) {
    if (!t__wi_p.$("ul.dropdown").is(c.target) && t__wi_p.$("ul.dropdown").has(c.target).length === 0 && t__wi_p.$(".open").has(c.target).length === 0) {
        t__wi_p.$("body").find(".navbar-header").find(".dropdown.open").removeClass("open")
    }
});

function upd_labels() {
    t__wi_p.$('a[href*="#right-side-tabs-sysinfo"]').text(lang("theme_xhred_titles_dashboard"));
    t__wi_p.$('a[href*="#right-side-tabs-notifications"]').text(lang("theme_xhred_global_notifications"));
    t__wi_p.$('a[href*="#right-side-tabs-favorites"]').text(lang("theme_xhred_global_favorites"));
    t__wi_p.$(".theme_xhred_notification_no_data").text(lang("theme_xhred_notification_no_data").toUpperCase());
    t__wi_p.$(".theme_xhred_notification_no_favorites").text(lang("theme_xhred_notification_no_favorites").toUpperCase());
    t__wi_p.$(".theme_xhred_notification_none").text(lang("theme_xhred_notification_none").toUpperCase())
}

function __tmp_opener() {
    t___wi.open($("#__tmp_openner").attr("href"));
    $("#__tmp_openner").remove()
}

function __tmp_opener_link(c) {
    $("body").append('<a href="' + t__wi_p.$__source_protocol + "://" + t__wi_p.$__host_url + ":" + $__source_port + c + '" target="_blank" class="hidden" id="__tmp_openner"></a>')
}
t__wi_p.$(".switch-toggle").on("contextmenu", "label", function(c) {
    c.preventDefault();
    if ($(this).attr("for") == "open_webmin" || $(this).attr("for") == "open_usermin") {
        __tmp_opener_link("");
        __tmp_opener()
    } else {
        if ($(this).attr("for") == "open_virtualmin") {
            __tmp_opener_link("?virtualmin");
            __tmp_opener()
        } else {
            if ($(this).attr("for") == "open_cloudmin") {
                __tmp_opener_link("?cloudmin");
                __tmp_opener()
            } else {
                if ($(this).attr("for") == "open_webmail") {
                    __tmp_opener_link("?mail");
                    __tmp_opener()
                }
            }
        }
    }
});
t__wi_p.$(".switch-toggle").on("click", "input.dynamic", function(c) {
    if (t___p__xhr_l === 1 || (typeof t___p__xhr_r != "undefined" && t___p__xhr_r === 1)) {
        c.preventDefault();
        c.stopPropagation();
        return
    }
    t__wi_p.hide_mobile_menu();
    if ($(this).attr("id") == "open_thirdlane") {
        t__wi_p.location.href = $_____link_full + "/asterisk/index.cgi";
        return
    }
    t__wi_p.t__s($(this).attr("id"));
    if ($(this).attr("id") == "open_dashboard") {
        t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + "/sysinfo.cgi");
        t__wi_p.__cms();
        return
    }
    t__m($(this).attr("id"), false, false)
});
t_sel_i();
$("aside").mCustomScrollbar({
    axis: "y",
    theme: "minimal",
    scrollInertia: 100,
    scrollButtons: false,
    callbacks: {
        onScroll: function() {
            if (!t__wi_p.$(".mobile-menu-toggler").is(":visible")) {
                t__wi_p.$(".form-control.sidebar-search").blur();
                if (t__wi_p.$("aside select") && t__wi_p.$("aside select").length > 0 && t__wi_p.$("aside select").hasClass("select2-hidden-accessible")) {
                    t__wi_p.$("aside select").select2("close")
                }
            }
        }
    }
});
t__wi_p.$(".loader").append('<div class="loader-close" id="loader-close"><i class="fa fa-fw fa-times-circle pull-right hidden"></i></div>');
$("body").on("mouseover", "#loader-close, #loader-close-sm", function() {
    $(this).find(".fa").removeClass("hidden")
}).on("mouseout", "#loader-close, #loader-close-sm", function() {
    $(this).find(".fa").addClass("hidden")
});
$("body").on("click", "#loader-close > .fa", function(c) {
    t__wi_p.t___p__xhr_l = 0;
    t__wi_p.t___p__xhr_r = 0;
    t__wi_p.$___ajax_requested_url = "_blank";
    t__wi_p.__lre()
}).on("click", "#loader-close-sm > .fa", function(c) {
    t__wi_p.t___p__xhr_l = 0;
    t__wi_p.t___p__xhr_r = 0;
    t__wi_p.$___ajax_requested_url = "_blank";
    t__wi_p.__lle()
});
__shell_commands__i__ = 0;
t__wi_p.$(".form-control.sidebar-search").focus(function(a) {
    t__wi_p.$(".__logo").addClass("inited");
    a.preventDefault();
    a.stopPropagation();
    __shell_commands__i__ = 0
});
const shell = t__wi_p.$("body").find(".-shell-port-"),
    cmdInput = shell.find('input[data-command="true"]'),
    shellOut = shell.find("div[data-output]"),
    shellCont = shell.find(".-shell-port-container"),
    shellAutocomplete = shell.data("autocomplete");
$(window).keydown(function(p) {
    var m = t__wi_p.$("body").find(".-shell-port-").hasClass("opened");
    if (!m) {
        t__wi_p.search_control(p);
        t__wi_p.shortcut_control(p)
    }
    if (p.keyCode === 38 && ((cmdInput.is(":focus") && m) || (t__wi_p.$(".form-control.sidebar-search").is(":focus")))) {
        p.preventDefault()
    }
    if (p.keyCode === 9 && cmdInput.is(":focus") && m && t__wi_p.$___ajax_requested_url !== "___blocked") {
        p.preventDefault();
        if (!shellAutocomplete) {
            return
        }
        var h = cmdInput.val().trim().split(/\s+(?!-)/),
            d = h.length,
            l = (h[0] && h[0].indexOf("-") === -1 ? 0 : 1),
            f = (h[1] && h[1].indexOf(":") === -1 ? 0 : 1),
            g = cmdInput.val().endsWith(" "),
            e = $.trim(h[0]) === "service",
            k = $.trim(h[0]) === "systemctl",
            q = ($.trim(h[0]) && $.trim(h[0]).startsWith("chown")),
            c = ((h.length === 1 && cmdInput.val().length && !l && !g) ? "commands" : ((e || k) ? "services" : (q ? "permissions" : "lists")));
        if (!$.trim(cmdInput.val()).length) {
            return
        }
        var o = cmdInput.val(),
            n = shell.find(".-shell-port-pwd"),
            j = n.attr("data-pwd");
        if (c === "services") {
            c = (e ? "service" : "systemctl");
            if (c === "systemctl" && h.length !== 3) {
                return
            }
            o = (c == "service" ? $.trim(h[1]) : $.trim(h[2]));
            if ($.trim(h[0]) === "service" && ((h.length === 2 && g) || h.length === 3)) {
                if (h.length === 3) {
                    o = "::::" + $.trim(h[1]) + "::::" + $.trim(h[2])
                } else {
                    o = "::::" + $.trim(h[1])
                }
            }
        }
        if (q) {
            if (d === 1 && !g) {
                cmdInput.val($.trim(h[0]) + " ");
                return
            }
            if (!f || !$.trim(h[1])) {
                c = "users";
                o = $.trim(h[1])
            } else {
                if (!g && !h[2]) {
                    c = "groups";
                    o = $.trim($.trim(h[1]).split(":")[1])
                } else {
                    c = "lists";
                    o = j + "/::::" + $.trim(h[2])
                }
            }
        }
        if (c === "lists" && !q) {
            o = j + "/::::" + $.trim(h[1]) + "::::" + $.trim(h[0]) + "::::" + $.trim(h[2])
        }
        t__wi_p.$___ajax_requested_url = "___blocked";
        $.ajax({
            type: "POST",
            url: $_____link_full + "/index.cgi?xhr-get_autocompletes=1&xhr-get_autocomplete_type=" + c + "&xhr-get_autocomplete_string=" + o + "",
            data: false,
            dataType: "json",
            success: function(u) {
                var r = u.length;
                if (r === 1) {
                    if (c === "service" || c === "systemctl" || c === "lists") {
                        var s = $.trim(h[0]),
                            t = $.trim(h[0]) + " " + $.trim(h[1]);
                        if (c === "lists") {
                            if (((s === "cd" && u[0].endsWith("/"))) || (s !== "cd")) {
                                if (s === "cd" || s === "cat") {
                                    cmdInput.val(s + " " + u[0])
                                } else {
                                    if ($.trim(h[2])) {
                                        cmdInput.val(t + " " + u[0] + "")
                                    } else {
                                        cmdInput.val(s + " " + u[0] + "")
                                    }
                                }
                            }
                        } else {
                            if (s === "service" && (h.length === 2 || h.length === 3)) {
                                if (h.length === 2) {
                                    cmdInput.val(s + " " + u[0] + " ")
                                } else {
                                    if (h.length === 3) {
                                        cmdInput.val($.trim(h[0]) + " " + $.trim(h[1]) + " " + u[0])
                                    }
                                }
                            } else {
                                if (s === "systemctl" && h.length === 3) {
                                    cmdInput.val(s + " " + $.trim(h[1]) + " " + u[0])
                                }
                            }
                        }
                    } else {
                        if (q) {
                            if (!f) {
                                cmdInput.val($.trim(h[0]) + " " + u[0] + ":")
                            } else {
                                if (!g && !h[2]) {
                                    cmdInput.val($.trim(h[0]) + " " + $.trim($.trim(h[1]).split(":")[0]) + ":" + u[0] + " ")
                                } else {
                                    cmdInput.val($.trim(h[0]) + " " + $.trim(h[1]) + " " + u[0] + "")
                                }
                            }
                        } else {
                            cmdInput.val(u[0] + " ")
                        }
                    }
                } else {
                    if (r > 1) {
                        var a = "<b>" + $(".-shell-port-type").text() + " " + escape_html(cmdInput.val()) + "</b>\n";
                        shellOut.find("pre").append(a);
                        shellOut.find("pre").append(escape_html(u.join("\n") + "\n"));
                        shellCont.scrollTop(shellCont[0].scrollHeight)
                    }
                }
                setTimeout(function() {
                    cmdInput.focus().mousedown()
                }, 10)
            },
            error: function() {}
        })
    }
});
$(window).keyup(function(D) {
    var s = t__wi_p.$("body").find(".-shell-port-").hasClass("opened");
    if (s) {
        var y = 0,
            o = 0,
            u = 0,
            k = t__wi_p.$(".form-control.sidebar-search"),
            C = (product_name(1).toLowerCase() == "cloudmin" && t__wi_p.$('a[target="page"][href*="/server-manager/save_serv.cgi"][href*="shell=1"]').length),
            p = 0;
        var E = 0;
        if (C) {
            E = ($_____link_full + "/server-manager/shell.cgi")
        } else {
            if (is_module("shell")) {
                E = ($_____link_full + "/shell/index.cgi")
            } else {
                return
            }
        }
        if (s || k.is(":focus")) {
            if (D.keyCode === 8) {
                __shell_commands__i__ = 0
            }
        }
        if (s) {
            y = $.trim(cmdInput.val());
            o = 1;
            u = 1
        } else {
            y = k.val();
            o = (typeof k.val() != "undefined");
            u = 0
        }
        if ((u || (o && (!y.trim() || y.trim().startsWith("!")))) && (D.keyCode == 38 || D.keyCode == 40)) {
            D.preventDefault();
            D.stopPropagation();
            typeof localStorage.getItem($hostname + "-shell_commands") == "undefined" ? localStorage.setItem($hostname + "-shell_commands", JSON.stringify({})) : false;
            var e = JSON.parse(localStorage.getItem($hostname + "-shell_commands")),
                w = e ? e.length : 0;
            if (__shell_commands__i__ === 0 && !y && D.keyCode == 40) {
                return
            } else {
                if (__shell_commands__i__ === 0 && y && D.keyCode == 38) {
                    p = 1;
                    return
                } else {
                    __shell_commands__i__ = D.keyCode == 40 ? ++__shell_commands__i__ : --__shell_commands__i__
                }
            }
            if (__shell_commands__i__ < 0 && D.keyCode === 38) {
                __shell_commands__i__ = w - 1
            } else {
                if (__shell_commands__i__ > w) {
                    __shell_commands__i__ = 0
                }
            }
            if (e && e[__shell_commands__i__ % w]) {
                if (!$.isEmptyObject(e) && (((__shell_commands__i__ == w) && D.keyCode === 38) || ((__shell_commands__i__ == w) && D.keyCode === 40) || p)) {
                    if (s) {
                        cmdInput.val("").focus()
                    } else {
                        k.val("").focus()
                    }
                    __shell_commands__i__ = 0;
                    return
                }
                if (s) {
                    var d = (e[__shell_commands__i__ % w]).replace(/^!/, "");
                    cmdInput.val(decode_html(d)).focus()
                }
            }
            return
        } else {
            if (o && y.trim().startsWith("!") && D.keyCode == 27) {
                D.preventDefault();
                D.stopPropagation();
                k.val("").focus();
                return
            }
        }
        if (o && y.trim().startsWith("!") && D.keyCode == 13) {
            k.addClass("_shell_form_");
            D.preventDefault();
            D.stopPropagation();
            if (is_module("shell") == 1 || C) {
                cmdInput.val(y.trim().substring(1)).focus();
                ported_shell_open(shell);
                var z = $.Event("keyup");
                z.keyCode = 13;
                cmdInput.trigger(z)
            }
        }
        var g = shell.find(".-shell-port-container"),
            q = shell.find(".-shell-port-pwd"),
            r = q.attr("data-pwd"),
            G = $.trim(cmdInput.val()),
            t = 0,
            B = D.keyCode ? D.keyCode : D.which,
            j = (D.altKey && String.fromCharCode(D.which).toLowerCase() == "l");
        if (B === 27) {
            ported_shell_close(shell);
            return
        }
        if (!cmdInput.is(":focus") && !get_selected_text()) {
            if (!D.ctrlKey && !D.altKey && !D.shiftKey && !D.metaKey) {
                cmdInput.val(cmdInput.val() + String.fromCharCode(D.which).toLowerCase())
            }
            cmdInput.focus()
        }
        if (G && B === 13 || j) {
            if (is_module("shell") || C) {
                if (t__wi_p.$____shelling__ === 1) {
                    return
                }
                t__wi_p.$____shelling__ = 1;
                if (G == "clear" || G == "reset" || G == "exit" || j) {
                    shellOut.find("pre").html("");
                    ported_shell_clear_cmd(cmdInput);
                    if (G == "exit") {
                        ported_shell_close(shell)
                    }
                }
                if (G == "cd ~") {
                    t = G;
                    G = ("cd " + q.attr("data-home"))
                }
                var F = false;
                if (G == "cd /") {
                    F = "/"
                }
                if (G == "history -c") {
                    localStorage.setItem($hostname + "-shell_commands", JSON.stringify({}));
                    var l = "<b>" + $(".-shell-port-type").text() + " " + G + "</b>\n";
                    shellOut.find("pre").append(l);
                    ported_shell_clear_cmd(cmdInput);
                    g.scrollTop(g[0].scrollHeight);
                    var f = '<form class="hidden" role="form" action="' + E + '" method="post" enctype="multipart/form-data">                          ' + (C ? '<input type="hidden" id="id" name="id" value="' + t__wi_p.$("#sid").val() + '">' : "") + '                          <input type="hidden" id="clearcmds" name="clearcmds" value="clearcmds">                          <input type="hidden" id="pwd" name="pwd" value="' + r + '">                        </form>',
                        A = new FormData($(f)[0]);
                    t__wi_p.$___ajax_requested_url = "___blocked";
                    $.ajax({
                        type: "POST",
                        url: (E + "?stripped=1&stripped=2"),
                        data: A,
                        dataType: "text",
                        cache: false,
                        contentType: false,
                        processData: false,
                        success: function(a) {},
                        error: function(a) {}
                    })
                } else {
                    if (G.startsWith("history")) {
                        ported_shell_clear_cmd(cmdInput);
                        var v = JSON.parse(localStorage.getItem($hostname + "-shell_commands")),
                            h = v ? v.length : 0,
                            x = (h ? h.toString().length : 0),
                            l = "<b>" + $(".-shell-port-type").text() + " " + G + "</b>\n";
                        $.each($(v), function(I, a) {
                            var c = I.toString().length,
                                H = "";
                            for (i = 0; i < ((x + 1) - c); i++) {
                                H += " "
                            }(typeof a == "string" && (l += ((I + 1) + H + a) + "\n"))
                        }).promise().done(function() {
                            shellOut.find("pre").append(l);
                            g.scrollTop(g[0].scrollHeight)
                        })
                    }
                }
                if (G == "clear" || G == "reset" || G == "exit" || G.startsWith("history") || j) {
                    t__wi_p.$____shelling__ = 0;
                    __shell_commands__i__ = 0;
                    ported_shell_size();
                    cmdInput.focus();
                    return
                }
                var n = '<form class="hidden" role="form" action="' + E + '" method="post" enctype="multipart/form-data">                      ' + (C ? '<input type="hidden" id="id" name="id" value="' + t__wi_p.$("#sid").val() + '">' : "") + '                      <input type="hidden" id="cmd" name="cmd" value="' + G.replace(/"/g, "&quot;") + '">                      <input type="hidden" id="pwd" name="pwd" value="' + r + '">                    </form>',
                    m = new FormData($(n)[0]);
                t__wi_p.$___ajax_requested_url = "___blocked";
                cmdInput.attr("readonly", "true");
                $.ajax({
                    type: "POST",
                    url: (E + "?stripped=1&stripped=2"),
                    data: m,
                    dataType: "text",
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function(a) {
                        var I = $(".-shell-port-type").text(),
                            H = $(a).find("pre").html().replace(/>&gt;/g, ">" + I + ""),
                            c = $(a).find('select[name="pcmd"] option').map(function() {
                                return escape_html($(this).val())
                            }).get().reOrder(-1, 0).reverse();
                        localStorage.setItem($hostname + "-shell_commands", JSON.stringify(c));
                        newPwd = $(a).find('input[name="pwd"]').val();
                        shellOut.find("pre").append((t ? (H.replace(new RegExp(G, "g"), t)) : H));
                        q.text(F ? F : (newPwd == q.attr("data-home") ? "~" : newPwd.split("/").filter(function(J) {
                            return $.trim(J) != ""
                        }).slice(-1)[0])).attr("data-pwd", F ? F : newPwd).attr("title", F ? F : newPwd);
                        ported_shell_size();
                        ported_shell_clear_cmd(cmdInput);
                        g.scrollTop(g[0].scrollHeight);
                        setTimeout(function() {
                            t__wi_p.$____shelling__ = 0;
                            __shell_commands__i__ = 0;
                            cmdInput.removeAttr("readonly").focus()
                        }, 100)
                    },
                    error: function(a) {}
                })
            }
        }
    }
});
$("body").on("submit", "#webmin_search_form", function(c) {
    var e = $(this),
        g = e.find("input.sidebar-search"),
        d = !g.val().trim().startsWith("!"),
        f = t__wi_p.$(".form-control.sidebar-search");
    if (!d || !$.trim(f.val())) {
        c.preventDefault();
        if (ported_shell_available()) {
            ported_shell_open(shell, g.val())
        }
    }
    setTimeout(function() {
        t__wi_p.$(".navigation > li:not('.has-sub')").removeClass("sub_active").find("span.current-large").remove();
        if (d) {
            f.val("")
        }
    }, 30)
});
$("body").on("click", "#right-side-tabs .right_pane_favorites_link", function(c) {
    $(".favorites-menu-outer.hover + .favorites-menu-close").trigger("click")
});
$("aside").on("click", ".user-links > li.favorites", function(c) {
    $(".favorites-menu-outer").addClass("hover")
});
$("body").on("click", "nav.favorites-menu li a", function() {});
$("body").on("click", ".favorites-menu-close, nav.favorites-menu li a", function() {
    t__wi_p.$(".favorites-menu-outer").removeClass("hover")
});
$(document).on("keydown", function(c) {
    if ($(".favorites-menu-outer").css("left") == "0px" && c.keyCode == 27) {
        t__wi_p.$(".favorites-menu-outer").removeClass("hover")
    }
});
favicon = new Favico({
    animation: "none"
});

function n___fv() {
    if (!settings_side_slider_enabled || !settings_side_slider_notifications_enabled) {
        return
    }
    var a = $(".right-side-tabs .list-group-item:not(.no-notifications, .opacity-0_3)").length;
    favicon.badge(a);
    __dpt();
    if (a > 0) {
        $(".right-side-tabs-toggler button i.fa-bell").addClass("faa-ring faa-slow animated-hover");
        $(".right-side-tabs-toggler button span.badge").removeClass("hidden").text(a);
        $("#right-side-tabs .right-side-tab-notification-asterix").removeClass("hidden").text(a)
    } else {
        $(".right-side-tabs-toggler button i.fa-bell").removeClass("faa-ring faa-slow animated-hover");
        $(".right-side-tabs-toggler button span.badge").addClass("hidden").text(0);
        $("#right-side-tabs .right-side-tab-notification-asterix").addClass("hidden").text(0)
    }
}

function n___ck() {
    var c = {};
    $.each(localStorage, function(j, o) {
        if (typeof j == "string" && j.indexOf("notifications_") > -1 && j.indexOf($hostname) > -1) {
            var l = j.split("_")[1],
                p = JSON.parse(o),
                e = p.title,
                g = p.time,
                h = p.timestamp,
                k = p.message,
                f = p.readStatus,
                m = p.type,
                n = p.link;
            c[g + "_" + e] = "" + l + "~~~~" + e + "~~~~" + g + "~~~~" + h + "~~~~" + k + "~~~~" + f + "~~~~" + m + "~~~~" + n;
            if ($('.list-group-item[id="' + l + '"][data-type="' + m + '"]').length) {
                $('.list-group-item[id="' + l + '"][data-type="' + m + '"] .list-group-item-heading small').text(moment.unix(g).fromNow())
            }
        }
    });
    var d = [];
    for (var a in c) {
        if (c.hasOwnProperty(a)) {
            d.push(a)
        }
    }
    $current_localData_notifications_sorted_keys = d.sort();
    $.each($current_localData_notifications_sorted_keys, function(j, p) {
        var o = c[p],
            l = o.split("~~~~")[0],
            e = o.split("~~~~")[1],
            g = o.split("~~~~")[2],
            h = o.split("~~~~")[3],
            k = o.split("~~~~")[4],
            f = o.split("~~~~")[5],
            m = o.split("~~~~")[6],
            n = o.split("~~~~")[7];
        if (!$('.list-group-item[id="' + l + '"][data-type="' + m + '"]').length) {
            n___ad(l, e, g, h, k, f, m, n)
        }
    })
}

function n___rm() {
    $.each(localStorage, function(c, a) {
        if (typeof c == "string" && c.indexOf("notifications_") > -1 && c.indexOf($hostname) > -1) {
            delete localStorage[c]
        }
    })
}

function n___mr(e, a, c, f) {
    var d = JSON.parse(localStorage.getItem($hostname + "-notifications_" + e + "_" + a));
    if (d) {
        localStorage.setItem($hostname + "-notifications_" + e + "_" + a, JSON.stringify({
            title: d.title,
            time: d.time,
            timestamp: d.timestamp,
            message: d.message,
            readStatus: c,
            type: d.type,
            link: d.link
        }))
    }
    f && n___fv()
}

function n___mr_a() {
    $(".right-side-tabs .list-group-item:not(.no-notifications)").each(function() {
        $(this).addClass("opacity-0_3");
        n___mr($(this).attr("id"), $(this).data("type"), 1, 0)
    }).promise().done(function() {
        n___fv()
    })
}

function n___ad(j, h, g, d, e, f, a, c) {
    $(".right-side-tabs .list-group").prepend('			<a class="list-group-item right-side-tabs-notification' + (f == "1" ? " opacity-0_3" : "") + '" data-type="' + a + '" id="' + j + '" href="' + c + '">			    <div class="media-body">			    <i class="fa fa-fw fa-trash-o pull-right hidden"></i>			    <i class="fa fa-fw fa-clear-all pull-right hidden"></i>			        <div class="list-group-item-heading">' + h + " <small>" + moment.unix(g).fromNow() + "</small></div>			        <small>" + e + "</small>			    </div>			</a>			");
    $(".right-side-tabs-no-notifications").remove();
    n___fv();
    if (!t__wi_p.$___________initial) {
        n___em()
    }
}

function n___em() {
    if ($(".right-side-tabs .list-group-item").length === 0) {
        var a = lang("theme_xhred_notification_none");
        $(".right-side-tabs .list-group").prepend('          <div class="right-side-tabs-no-notifications" style="opacity: 0">          <div class="list-group-item text-center no-notifications">          <small class="list-group-item-text text-lighter theme_xhred_notification_none">' + (a ? a.toUpperCase() : "") + "</small>          </div>          </div>        ");
        $(".right-side-tabs-no-notifications").animate({
            opacity: "1"
        }, $settings_animation_left_slide_time, function() {})
    }
    setTimeout(function() {
        n___fv()
    }, $settings_animation_left_slide_time)
}

function set_rp_tt() {
    function a() {
        var c = $("span[data-convertible-timestamp-full]");
        c.data("convertible-timestamp-full", (parseInt(c.data("convertible-timestamp-full")) + 1));
        c.text(t__wi_p.moment.unix(c.data("convertible-timestamp-full")).format(settings_window_replaced_timestamp_format_full))
    }
    $(function() {
        setInterval(a, 1000)
    });
    $("body").on("click", '#right-side-tabs a:not([data-toggle="collapse"]):not([role="tab"]):not(.list-group-item)', function(c) {
        t__wi_p.$(".right-side-tabs-toggler:not(.hidden)").trigger("click")
    });
    $("body").on("click", "#right-side-tabs .info-container .info-list-data a", function(c) {
        $(this).attr("target", "page")
    });
    $("body").on("click", "#right-side-tabs .info-container .graph-container-fw", function(c) {
        var e = $(this).attr("class"),
            d = (e.indexOf("cpu_") > -1 ? "cpu" : (e.indexOf("mem_") > -1 ? "mem" : (e.indexOf("virt_") > -1 ? "virt" : "disk")));
        if (d == "cpu" && is_module("proc")) {
            window.page.location.href = $_____link_full + "/proc/index_cpu.cgi"
        } else {
            if ((d == "mem" || d == "virt") && is_module("proc")) {
                window.page.location.href = $_____link_full + "/proc/index_size.cgi"
            } else {
                if (d == "disk" && is_module("disk-usage")) {
                    window.page.location.href = $_____link_full + "/disk-usage"
                } else {
                    if (d == "disk" && is_module("quota")) {
                        window.page.location.href = $_____link_full + "/quota/list_users.cgi?dir=%2F"
                    }
                }
            }
        }
        t__wi_p.$(".right-side-tabs-toggler:not(.hidden)").trigger("click")
    })
}

function fetch_right_pane_favorites() {
    var a = window.page.f__g(),
        c = $("#right-side-tabs .no-favorites_data");
    $("#right-side-tabs .favorites-dcontainer .right_pane_favorites_link, #right-side-tabs .favorites-dcontainer .right_pane_favorites_num").remove();
    if (a.length) {
        $.each(a, function(e, d) {
            var f = $("#right-side-tabs .favorites-dcontainer");
            f.append('<span class="right_pane_favorites_num">' + (e + 1) + '</span><a class="right_pane_favorites_link" target="page" href="' + d.link + '"><i data-product="' + d.icon + '" class="wbm-' + d.icon + "" + (d.icon == "virtualmin" ? "" : "") + ' wbm-sm">&nbsp;&nbsp;</i><span title="' + d.title + '" class="right_pane_favorites_text">' + d.title + "</span></a>")
        });
        c.addClass("hidden")
    } else {
        c.removeClass("hidden")
    }
}

function get_right_panel_sysinfo_data() {
    set_rp_tt();
    $_____________got_rp__sys_dat = 1;
    return '      <div class="is-sysinfo_data hidden">        <div class="' + _v__ls__a + '" style="height: 4px"></div>        <div class="graph-container graph-container-fw cpu_percent' + _v__ls__a + '"><div class="graph"><div class="description" title="' + localStorage.getItem($hostname + "-sysinfo_load") + '">' + lang("theme_xhred_global_cpu_load") + ": " + localStorage.getItem($hostname + "-sysinfo_cpu_percent_stats") + "% (" + localStorage.getItem($hostname + "-sysinfo_load") + ')</div><strong class="bar" style="width:' + localStorage.getItem($hostname + "-sysinfo_cpu_percent_stats") + '%"></strong></div></div><br class="' + _v__ls__a + '">        <div class="graph-container graph-container-fw mem_percent' + _v__ls__a + '"><div class="graph"><div class="description" title="' + localStorage.getItem($hostname + "-sysinfo_real_memory") + '">' + lang("body_real") + ": " + localStorage.getItem($hostname + "-sysinfo_mem_percent_stats") + "% (" + localStorage.getItem($hostname + "-sysinfo_real_memory") + ')</div><strong class="bar" style="width:' + localStorage.getItem($hostname + "-sysinfo_mem_percent_stats") + '%"></strong></div></div><br class="' + _v__ls__a + '">        <div class="graph-container graph-container-fw virt_percent' + _v__ls__a + '"><div class="graph"><div class="description" title="' + localStorage.getItem($hostname + "-sysinfo_virtual_memory") + '">' + lang("body_virt") + ": " + localStorage.getItem($hostname + "-sysinfo_virt_percent_stats") + "% (" + localStorage.getItem($hostname + "-sysinfo_virtual_memory") + ')</div><strong class="bar" style="width:' + localStorage.getItem($hostname + "-sysinfo_virt_percent_stats") + '%"></strong></div></div><br class="' + _v__ls__a + '">        <div class="graph-container graph-container-fw disk_percent' + _v__ls__a + '"><div class="graph"><div class="description" title="' + localStorage.getItem($hostname + "-sysinfo_disk_space") + '">' + lang("body_disk") + ": " + localStorage.getItem($hostname + "-sysinfo_disk_percent_stats") + "% (" + localStorage.getItem($hostname + "-sysinfo_disk_space") + ')</div><strong class="bar" style="width:' + localStorage.getItem($hostname + "-sysinfo_disk_percent_stats") + '%"></strong></div></div><br class="' + _v__ls__a + '">                <div data-stats="cpu" style="height: 10px"></div><strong data-stats="cpu">' + lang("body_cputemps") + '</strong><br data-stats="cpu">' + (localStorage.getItem($hostname + "-sysinfo_cpu_temperature") ? localStorage.getItem($hostname + "-sysinfo_cpu_temperature").replace(/<br>|&nbsp;/gi, "") : "") + '<br data-stats="cpu">        <div data-stats="drive" style="height: 10px"></div><strong data-stats="drive">' + lang("body_drivetemps") + '</strong><br data-stats="drive">' + (localStorage.getItem($hostname + "-sysinfo_hdd_temperature") ? localStorage.getItem($hostname + "-sysinfo_hdd_temperature").replace(/<br>|&nbsp;/gi, "") : "") + '<br data-stats="drive">                <div class="info-list-data">          <strong>' + lang("body_host") + '</strong><br><span data-data="host">' + localStorage.getItem($hostname + "-sysinfo_host") + "</span>          <strong>" + lang("body_os") + '</strong><br><span data-data="os">' + localStorage.getItem($hostname + "-sysinfo_os") + "</span>          <strong>" + lang("body_time") + '</strong><br><span data-data="local_time">' + ((settings_window_replace_timestamps && localStorage.getItem($hostname + "-sysinfo_local_time")) ? moment.unix($(localStorage.getItem($hostname + "-sysinfo_local_time")).attr("data-convertible-timestamp-full")).format(settings_window_replaced_timestamp_format_full) : localStorage.getItem($hostname + "-sysinfo_local_time")) + "</span>          <strong>" + lang("body_kernel") + '</strong><br><span data-data="kernel_arch">' + localStorage.getItem($hostname + "-sysinfo_kernel_arch") + "</span>          <strong>" + lang("body_uptime") + '</strong><br><span data-data="uptime">' + localStorage.getItem($hostname + "-sysinfo_uptime") + "</span>          <strong>" + lang("body_procs") + '</strong><br><span data-data="running_proc">' + localStorage.getItem($hostname + "-sysinfo_running_proc") + "</span>          <strong>" + lang("body_updates") + '</strong><br><span data-data="package_message">' + (localStorage.getItem($hostname + "-sysinfo_package_message") ? $(localStorage.getItem($hostname + "-sysinfo_package_message")).html($(localStorage.getItem($hostname + "-sysinfo_package_message")).html().split(",")[0])[0].outerHTML : "") + '</span>        </div>        <div class="warning-list-data">        </div>        <div class="extended-list-data">        </div>              </div>      <div class="no-sysinfo_data">          <div style="height: 5px"></div>          <small class="list-group-item-text text-lighter theme_xhred_notification_no_data">' + lang("theme_xhred_notification_no_data").toUpperCase() + "</small>      </div>    "
}
if ($access_level == 0 && is_module("status") == 1) {
    var defalt_right_tab = (localStorage.getItem($hostname + "-right-side-tab") ? localStorage.getItem($hostname + "-right-side-tab") : "#right-side-tabs-sysinfo"),
        $no_stats_data = '<div class="no-sysinfo_data"><div style="height: 5px"></div>            <small class="list-group-item-text text-lighter theme_xhred_notification_no_data"></small>          </div>',
        $no_fav_data = '<div class="no-favorites_data"><div style="height: 4px"></div>              <small class="list-group-item-text text-lighter theme_xhred_notification_no_favorites"></small>            </div>';
    $("body").append('		<div id="right-side-tabs" class="' + (settings_side_slider_enabled ? "" : " hidden ") + "right-side-tabs" + (settings_side_slider_fixed ? " right-side-tabs-fixed" : "") + '" data-background-style="' + settings_side_slider_palette + '">	  		<ul class="nav nav-tabs" role="tablist">        <li role="presentation" class="' + (defalt_right_tab == "#right-side-tabs-sysinfo" ? "active " : "") + "" + (settings_side_slider_sysinfo_enabled ? "" : " hidden") + '"><a href="#right-side-tabs-sysinfo" aria-controls="home" role="tab" data-toggle="tab">&nbsp;</a></li>				<li role="presentation" class="' + (defalt_right_tab == "#right-side-tabs-notifications" ? "active " : "") + "" + (($_v__ls__a && settings_side_slider_notifications_enabled && (is_module("package-updates") == 1 || is_module("csf") == 1)) ? "" : " hidden") + '"><span class="right-side-tab-notification-asterix pointer-events-none hidden"></span><a href="#right-side-tabs-notifications" aria-controls="home" role="tab" data-toggle="tab">&nbsp;</a></li>				<li role="presentation" class="' + (defalt_right_tab == "#right-side-tabs-favorites" ? "active " : "") + "" + ((settings_side_slider_favorites_enabled && is_module("webmin")) ? "" : " hidden") + '"><a href="#right-side-tabs-favorites" aria-controls="home" role="tab" data-toggle="tab">&nbsp;</a></li>			</ul>			<div class="tab-content">          <div role="tabpanel" class="tab-pane' + (defalt_right_tab == "#right-side-tabs-sysinfo" ? " active" : "") + "" + (settings_side_slider_sysinfo_enabled ? "" : " hidden") + '" id="right-side-tabs-sysinfo">              <div class="info-container">                  ' + $no_stats_data + '              </div>  			  </div>          <div role="tabpanel" class="tab-pane' + (defalt_right_tab == "#right-side-tabs-notifications" ? " active" : "") + "" + (($_v__ls__a && settings_side_slider_notifications_enabled && (is_module("package-updates") == 1 || is_module("csf") == 1)) ? "" : " hidden") + '" id="right-side-tabs-notifications">              <div class="list-group"></div>          </div>          <div role="tabpanel" class="tab-pane' + (defalt_right_tab == "#right-side-tabs-favorites" ? " active" : "") + "" + ((settings_side_slider_favorites_enabled && is_module("webmin")) ? "" : " hidden") + '" id="right-side-tabs-favorites">              <div class="favorites-dcontainer">                  ' + $no_fav_data + '              </div>  			  </div>                    <div class="right-side-tabs-dismiss pull-right">              <i class="fa fa-fw fa-lg fa-reload"></i>              <i class="fa fa-fw fa-star-o right-side-tabs-favorites-ctl pull-right"></i>              <i class="fa fa-fw fa-lg fa-dashboard pull-right"></i>              <i class="fa fa-fw fa-lg fa-trash pull-right"></i>              <i class="fa fa-fw fa-lg fa-clear-all pull-right"></i>          </div>			</div>		</div>		  <div class="' + (settings_side_slider_enabled ? "" : " hidden ") + "right-side-tabs-toggler" + (settings_side_slider_fixed ? " hidden" : "") + '" data-background-style="' + settings_side_slider_palette + '">		  	<button type="button" class="btn btn-primary btn-menu-toggler" style="padding-left: 6px; padding-right: 5px;' + ((__ie__() > 5 && __ie__() <= 11) ? " right: 0; position: fixed;" : "") + '">		  		<span class="badge badge-danger hidden"></span>		  		<i class="fa fa-fw fa-lg fa-bell"></i>		  	</button>		  </div>  	');
    if (!$('a[href="' + defalt_right_tab + '"]:visible').length) {
        $("#right-side-tabs ul.nav-tabs li a:visible").trigger("click")
    }
    $('#right-side-tabs .nav.nav-tabs a[data-toggle="tab"]').on("shown.bs.tab", function(c) {
        var a = $(c.target).attr("href");
        localStorage.setItem($hostname + "-right-side-tab", a)
    });
    $("body").on("click", ".right-side-tabs-favorites-ctl", function(a) {
        if ($(".favorites-menu-outer").hasClass("hover")) {
            $(".favorites-menu-close").trigger("click")
        } else {
            $(".user-link.favorites").trigger("click")
        }
    });
    $("body").on("click", "#right-side-tabs .fa-dashboard", function(a) {
        t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + "/sysinfo.cgi");
        t__wi_p.$(".right-side-tabs-toggler:not(.hidden)").trigger("click")
    })
} else {
    t__wi_p.$("html").attr("data-slider-fixed", "0");
    t__wi_p.$(".right-side-tabs-toggler").addClass("hidden")
}
$(".right-side-tabs .tab-pane").each(function() {
    $(this).css("height", $(window).height() - 92)
});
$(".right-side-tabs").on("mouseover", ".list-group-item", function(a) {
    $(this).find(".fa.fa-trash-o").removeClass("hidden");
    !$(this).hasClass("opacity-0_3") && $(this).find(".fa-clear-all").removeClass("hidden")
}).on("mouseout", ".list-group-item", function(a) {
    $(this).find(".fa.fa-trash-o").addClass("hidden");
    $(this).find(".fa-clear-all").addClass("hidden")
});
$(".right-side-tabs").on("click", "[data-port-href]", function(a) {
    a.preventDefault();
    a.stopPropagation();
    t___wi.open($(this).data("port-href"))
});
$(".right-side-tabs").on("click", 'a.list-group-item[data-type="csf_deny"]', function(a) {
    a.preventDefault();
    a.stopPropagation();
    if ($(a.target).is(".fa.fa-trash-o") || $(a.target).is(".fa-clear-all") || $(a.target).is("[data-port-href]")) {
        return
    }
    t__wi_p.$('iframe[name="page"]').contents().find("body").append('						<form action="' + $_____link_full + '/csf/" method="post" class="hidden" id="csf_temporary_ip_entries">                    		<input type="hidden" name="action" value="temp">                		</form>');
    t__wi_p.$('iframe[name="page"]').contents().find("form#csf_temporary_ip_entries").submit();
    t__wi_p.$(".right-side-tabs-toggler:not(.hidden)").trigger("click")
});
$(".right-side-tabs").on("click contextmenu", "a.list-group-item", function(a) {
    a.preventDefault();
    if (typeof t__wi_p.$('iframe[name="page"]').get(0).contentWindow.__num == "function" && !t__wi_p.$('iframe[name="page"]').get(0).contentWindow.__num()) {
        a.preventDefault();
        a.stopPropagation();
        return
    }
    if (a.type == "click" && ($(a.target).is(".authentic_update") || $(a.target).is(".fa-refresh"))) {
        n___mr($($(this).parents("a.list-group-item").context).attr("id"), $($(this).parents("a.list-group-item").context).data("type"), 1, 1);
        $($(this).parents("a.list-group-item").context).addClass("opacity-0_3");
        t__wi_p.$(".right-side-tabs-toggler:not(.hidden)").trigger("click");
        t__wi_p.history.pushState(null, null, $_____link_full + "/?updating-webmin-theme");
        t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + "/webmin/edit_themes.cgi");
        return
    }
    if (a.type == "contextmenu") {
        $(this).find(".fa-clear-all").trigger("click");
        a.preventDefault();
        a.stopPropagation();
        return
    }
    if (!$(a.target).is(".fa.fa-trash-o") && !$(a.target).is(".fa-clear-all") && !$(a.target).is("[data-port-href]")) {
        if ($(this).attr("href") && $(this).attr("href").length && $(this).attr("href") != "undefined" && $(this).attr("data-type") != "csf_deny") {
            $(this).addClass("opacity-0_3");
            $(this).find(".fa-clear-all").addClass("hidden");
            n___mr($(this).attr("id"), $(this).data("type"), 1, 1);
            t__wi_p.$(".right-side-tabs-toggler:not(.hidden)").trigger("click");
            t__wi_p.$('iframe[name="page"]').attr("src", $(this).attr("href"))
        } else {
            $(this).addClass("opacity-0_3");
            n___mr($(this).attr("id"), $(this).data("type"), 1, 1)
        }
    } else {
        if ($(a.target).is(".fa-clear-all")) {
            $(this).addClass("opacity-0_3");
            $(this).find(".fa-clear-all").addClass("hidden");
            n___mr($(this).attr("id"), $(this).data("type"), 1, 1);
            return
        }
        $(this).animate({
            opacity: "0"
        }, $settings_animation_left_slide_time, function() {
            $(this).remove();
            localStorage.removeItem($hostname + "-notifications_" + $(this).attr("id") + "_" + $(this).data("type"));
            n___em()
        })
    }
});
$(".right-side-tabs-dismiss i.fa-reload").click(function(a) {
    t__wi_p.__si__bg_upd_exec()
});
$(".right-side-tabs-dismiss i.fa-clear-all").click(function(a) {
    n___mr_a()
});
$(".right-side-tabs-dismiss i.fa-trash").click(function(a) {
    $(".right-side-tabs .list-group-item:not(.no-notifications)").animate({
        opacity: "0"
    }, $settings_animation_left_slide_time, function() {
        $(this).remove();
        n___rm();
        n___em()
    })
});
$("body").on("click", ".right-side-tabs-toggler:not(.hidden)", function(a) {
    if ($(this).hasClass("opened")) {
        $(this).removeClass("opened");
        $(this).animate({
            right: "0"
        }, $settings_animation_left_slide_time);
        $(".right-side-tabs").animate({
            right: "-302"
        }, $settings_animation_left_slide_time);
        if (__ie__() > 5 && __ie__() <= 11) {
            $(this).find("button").animate({
                right: "0"
            }, $settings_animation_left_slide_time)
        }
    } else {
        $(this).addClass("opened");
        $(this).animate({
            right: "300"
        }, $settings_animation_left_slide_time);
        $(".right-side-tabs").animate({
            right: "0"
        }, $settings_animation_left_slide_time);
        if (__ie__() > 5 && __ie__() <= 11) {
            $(this).find("button").animate({
                right: "300"
            }, $settings_animation_left_slide_time)
        }
    }
});
$(".right-side-tabs .tab-pane").mCustomScrollbar({
    axis: "y",
    theme: "minimal",
    scrollInertia: 100,
    scrollButtons: false
});
$("aside, .btn-menu-toggler").click(function(a) {
    if (!t__wi_p.$(".right-side-tabs-toggler").hasClass("hidden") && t__wi_p.$(".right-side-tabs-toggler").hasClass("opened") && !$(a.target).is(".btn-menu-toggler") && !$(a.target).is(".fa-bell") && !$(a.target).is("li.user-link.favorites") && !$(a.target).is(".badge.badge-danger")) {
        t__wi_p.$(".right-side-tabs-toggler:not(.hidden)").trigger("click")
    }
});
if (!!settings_button_tooltip) {
    $("body").tooltip({
        selector: 'li[data-toggle="tooltip"], li > a[data-toggle="tooltip"].menu-exclude-link, label[data-toggle="tooltip"]',
        container: "body",
        html: true
    })
}
$("body").on("click", ".user-link.palette-toggle", function(a) {
    f__toogle_palette()
});
$("body").on("click", ".user-link.ported-console", function(a) {
    if (ported_shell_available()) {
        ported_shell_open(shell)
    }
});
n___em();
n___ck();
moment.locale($("body").data("language"));