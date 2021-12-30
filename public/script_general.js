(function () {
    var a = {};
    function trans(c, d) {
        var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        a[e[0x0]] = e;
        return '';
    }
    function regTextVar(c, d) {
        var e = ![];
        d = d['toLowerCase']();
        var f = function () {
            var o = this['get']('data');
            o['updateText'](o['translateObjs'][c]);
        };
        var g = function (o) {
            var p = o['data']['nextSelectedIndex'];
            if (p >= 0x0) {
                var q = o['source']['get']('items')[p];
                var r = function () {
                    q['unbind']('start', r, this);
                    f['call'](this);
                };
                q['bind']('start', r, this);
            } else
                f['call'](this);
        };
        var h = function (o) {
            return function (p) {
                if (o in p) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var i = function (o, p) {
            return function (q, r) {
                if (o == q && p in r) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var j = function (o, p, q) {
            for (var r = 0x0; r < o['length']; ++r) {
                var s = o[r];
                var t = s['get']('selectedIndex');
                if (t >= 0x0) {
                    var u = p['split']('.');
                    var v = s['get']('items')[t];
                    if (q !== undefined && !q['call'](this, v))
                        continue;
                    for (var w = 0x0; w < u['length']; ++w) {
                        if (v == undefined)
                            return '';
                        v = 'get' in v ? v['get'](u[w]) : v[u[w]];
                    }
                    return v;
                }
            }
            return '';
        };
        var k = function (o) {
            var p = o['get']('player');
            return p !== undefined && p['get']('viewerArea') == this['getMainViewer']();
        };
        switch (d) {
        case 'title':
        case 'subtitle':
            var m = function () {
                switch (d) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (m) {
                return function () {
                    var o = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!e) {
                        for (var p = 0x0; p < o['length']; ++p) {
                            o[p]['bind']('changing', g, this);
                        }
                        e = !![];
                    }
                    return j['call'](this, o, m, k);
                };
            }
            break;
        default:
            if (d['startsWith']('quiz.') && 'Quiz' in TDV) {
                var n = undefined;
                var m = function () {
                    switch (d) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var o = /quiz\.([\w_]+)\.(.+)/['exec'](d);
                        if (o) {
                            n = o[0x1];
                            switch ('quiz.' + o[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (m) {
                    return function () {
                        var o = this['get']('data')['quiz'];
                        if (o) {
                            if (!e) {
                                if (n != undefined)
                                    if (n == 'global') {
                                        var q = this['get']('data')['quizConfig'];
                                        var s = q['objectives'];
                                        for (var u = 0x0, w = s['length']; u < w; ++u) {
                                            o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, s[u]['id'], m), this);
                                        }
                                    } else {
                                        o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, n, m), this);
                                    }
                                else
                                    o['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], h['call'](this, m), this);
                                e = !![];
                            }
                            try {
                                var x = 0x0;
                                if (n != undefined) {
                                    if (n == 'global') {
                                        var q = this['get']('data')['quizConfig'];
                                        var s = q['objectives'];
                                        for (var u = 0x0, w = s['length']; u < w; ++u) {
                                            x += o['getObjective'](s[u]['id'], m);
                                        }
                                    } else {
                                        x = o['getObjective'](n, m);
                                    }
                                } else {
                                    x = o['get'](m);
                                    if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        x += 0x1;
                                }
                                return x;
                            } catch (y) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, c) {
        var d = {};
        d['player'] = player;
        d['playList'] = c;
        function e(h) {
            for (var j = 0x0; j < h['length']; ++j) {
                var k = h[j];
                if ('id' in k)
                    player[k['id']] = k;
            }
        }
        if (d['questions']) {
            e(d['questions']);
            for (var f = 0x0; f < d['questions']['length']; ++f) {
                var g = d['questions'][f];
                e(g['options']);
            }
        }
        if (d['objectives']) {
            e(d['objectives']);
        }
        if (d['califications']) {
            e(d['califications']);
        }
        if (d['score']) {
            player[d['score']['id']] = d['score'];
        }
        if (d['question']) {
            player[d['question']['id']] = d['question'];
        }
        if (d['timeout']) {
            player[d['timeout']['id']] = d['timeout'];
        }
        player['get']('data')['translateObjs'] = a;
        return d;
    }
    var b = {"start":"this.init()","contentOpaque":false,"scrollBarWidth":10,"backgroundColorRatios":[0],"height":"100%","borderRadius":0,"verticalAlign":"top","backgroundColorDirection":"vertical","horizontalAlign":"left","scrollBarVisible":"rollOver","overflow":"hidden","paddingLeft":0,"mouseWheelEnabled":true,"paddingRight":0,"data":{"defaultLocale":"en","name":"Player865","textToSpeechConfig":{"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"volume":1,"pitch":1,"speechOnTooltip":false,"rate":1},"locales":{"en":"locale/en.txt"}},"vrPolyfillScale":0.75,"definitions": [{"id":"mainPlayList","items":[{"media":"this.panorama_06775DB7_0C2E_D9EB_41A3_14479EFA84DD","camera":"this.panorama_06775DB7_0C2E_D9EB_41A3_14479EFA84DD_camera","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem"}],"class":"PlayList"},{"overflow":"scroll","closeButtonBorderSize":0,"closeButtonRollOverBorderColor":"#000000","closeButtonIconLineWidth":2,"closeButtonRollOverBackgroundColorRatios":[],"backgroundColorDirection":"vertical","showEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeInEffect"},"veilOpacity":0.4,"paddingLeft":0,"closeButtonBackgroundOpacity":0,"modal":true,"data":{"name":"Window4382"},"titlePaddingRight":5,"shadowColor":"#000000","paddingRight":0,"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"height":"90%","headerPaddingLeft":10,"bodyBackgroundColorDirection":"vertical","closeButtonPressedIconColor":"#FFFFFF","footerHeight":5,"footerBackgroundOpacity":0,"closeButtonBorderRadius":11,"scrollBarMargin":2,"toolTipHorizontalAlign":"center","closeButtonRollOverBackgroundOpacity":0,"titlePaddingTop":5,"footerBackgroundColorRatios":[0,0.9,1],"backgroundColor":[],"scrollBarOpacity":0.5,"closeButtonIconHeight":20,"children":["this.WebFrame_1C310919_0C31_A6A7_41A3_124CDF2970C5"],"layout":"vertical","closeButtonIconColor":"#B2B2B2","contentOpaque":false,"headerPaddingRight":0,"bodyPaddingRight":0,"gap":10,"minHeight":20,"paddingTop":0,"paddingBottom":0,"minWidth":20,"titlePaddingBottom":5,"headerBackgroundColorRatios":[0,0.1,1],"headerVerticalAlign":"middle","shadowHorizontalLength":3,"scrollBarVisible":"rollOver","closeButtonPressedBorderColor":"#000000","scrollBarColor":"#000000","verticalAlign":"middle","titlePaddingLeft":5,"horizontalAlign":"center","closeButtonRollOverBorderSize":0,"backgroundColorRatios":[],"closeButtonBorderColor":"#000000","closeButtonPaddingLeft":0,"closeButtonRollOverIconLineWidth":2,"bodyPaddingLeft":0,"borderRadius":5,"titleFontFamily":"Arial","shadowBlurRadius":6,"headerPaddingTop":10,"veilColorRatios":[0,1],"closeButtonRollOverIconColor":"#FFFFFF","veilColor":["#000000","#000000"],"closeButtonBackgroundColor":[],"shadowSpread":1,"closeButtonIconWidth":20,"veilColorDirection":"horizontal","veilShowEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeInEffect"},"bodyPaddingTop":0,"bodyPaddingBottom":0,"closeButtonPaddingTop":0,"titleHorizontalAlign":"left","class":"Window","shadowOpacity":0.5,"closeButtonPressedBackgroundOpacity":0,"titleFontSize":"1.29vmin","closeButtonPressedBorderSize":0,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"propagateClick":false,"closeButtonPressedBackgroundColor":[],"headerBackgroundOpacity":0,"width":"90%","closeButtonPressedBackgroundColorRatios":[],"closeButtonRollOverBackgroundColor":[],"backgroundOpacity":1,"closeButtonPressedIconLineWidth":3,"closeButtonPaddingBottom":0,"id":"window_035A7E5B_0C36_5B5B_4181_76F3F0F3C725","bodyBackgroundOpacity":0,"veilHideEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeOutEffect"},"borderSize":0,"titleFontColor":"#000000","scrollBarWidth":10,"headerPaddingBottom":5,"shadow":true,"shadowVerticalLength":0,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"closeButtonBackgroundColorRatios":[],"bodyBackgroundColorRatios":[0,0.5,1],"hideEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeOutEffect"},"closeButtonPaddingRight":0,"footerBackgroundColorDirection":"vertical","headerBackgroundColorDirection":"vertical"},{"data":{"label":"vista3d_panorama"},"id":"panorama_06775DB7_0C2E_D9EB_41A3_14479EFA84DD","pitch":0,"hfovMin":"150%","vfov":180,"thumbnailUrl":"media/panorama_06775DB7_0C2E_D9EB_41A3_14479EFA84DD_t.jpg","hfov":360,"label":trans('panorama_06775DB7_0C2E_D9EB_41A3_14479EFA84DD.label'),"overlays":["this.overlay_00D0397B_0C31_D95B_4185_914F51A3037D"],"hfovMax":130,"frames":[{"cube":{"levels":[{"url":"media/panorama_06775DB7_0C2E_D9EB_41A3_14479EFA84DD_0/{face}/0/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":12,"rowCount":2,"width":6144},{"url":"media/panorama_06775DB7_0C2E_D9EB_41A3_14479EFA84DD_0/{face}/1/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6,"rowCount":1,"width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_06775DB7_0C2E_D9EB_41A3_14479EFA84DD_t.jpg","class":"CubicPanoramaFrame"}],"partial":false,"class":"Panorama"},{"hoverFactor":0,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_0609C101_0C2E_E6A7_4181_C8246156D384","id":"panorama_06775DB7_0C2E_D9EB_41A3_14479EFA84DD_camera","automaticZoomSpeed":10,"class":"PanoramaCamera"},{"mouseControlMode":"drag_rotation","surfaceSelectionEnabled":false,"displayPlaybackBar":true,"touchControlMode":"drag_rotation","arrowKeysAction":"translate","viewerArea":"this.MainViewer","aaEnabled":true,"zoomEnabled":true,"id":"MainViewerPanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer"},{"subtitlesVerticalAlign":"bottom","subtitlesPaddingLeft":5,"toolTipBorderColor":"#767676","data":{"name":"Main Viewer"},"playbackBarHeadShadowOpacity":0.7,"toolTipPaddingRight":6,"paddingLeft":0,"playbackBarHeadOpacity":1,"height":"100%","subtitlesBottom":50,"subtitlesBackgroundColor":"#000000","playbackBarHeadShadowBlurRadius":3,"toolTipShadowHorizontalLength":0,"paddingRight":0,"subtitlesPaddingRight":5,"subtitlesTextShadowOpacity":1,"playbackBarProgressOpacity":1,"subtitlesBorderSize":0,"playbackBarHeadBorderColor":"#000000","toolTipHorizontalAlign":"center","toolTipOpacity":1,"progressBackgroundColorRatios":[0],"playbackBarLeft":0,"progressRight":0,"subtitlesTop":0,"progressOpacity":1,"playbackBarHeadWidth":6,"toolTipFontSize":"1.11vmin","playbackBarHeadHeight":15,"toolTipPaddingLeft":6,"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"vertical","paddingTop":0,"progressBarBackgroundColorRatios":[0],"subtitlesBackgroundOpacity":0.2,"transitionDuration":500,"playbackBarHeadShadowColor":"#000000","minHeight":50,"subtitlesBorderColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"minWidth":100,"progressBackgroundOpacity":1,"progressBackgroundColorDirection":"vertical","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarOpacity":1,"progressBorderColor":"#000000","toolTipShadowVerticalLength":0,"surfaceReticleColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"paddingBottom":0,"vrPointerSelectionColor":"#FF6600","toolTipPaddingTop":4,"playbackBarProgressBorderSize":0,"toolTipPaddingBottom":4,"toolTipBorderSize":1,"progressBarOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"borderRadius":0,"surfaceReticleOpacity":0.6,"playbackBarHeight":10,"playbackBarBackgroundColorDirection":"vertical","playbackBarHeadShadow":true,"playbackBarRight":0,"progressBackgroundColor":["#FFFFFF"],"toolTipShadowOpacity":1,"subtitlesFontColor":"#FFFFFF","playbackBarBorderSize":0,"subtitlesTextDecoration":"none","toolTipDisplayTime":600,"progressBottom":0,"firstTransitionDuration":0,"toolTipShadowColor":"#333333","progressBarBorderRadius":0,"subtitlesGap":0,"progressBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","surfaceReticleSelectionColor":"#FFFFFF","progressHeight":10,"subtitlesPaddingBottom":5,"toolTipBorderRadius":3,"surfaceReticleSelectionOpacity":1,"subtitlesTextShadowBlurRadius":0,"vrPointerColor":"#FFFFFF","toolTipShadowSpread":0,"playbackBarHeadShadowVerticalLength":0,"subtitlesPaddingTop":5,"subtitlesFontSize":"3vmin","toolTipFontStyle":"normal","playbackBarBottom":5,"translationTransitionDuration":1000,"progressBarBorderSize":0,"toolTipTextShadowBlurRadius":3,"subtitlesFontWeight":"normal","vrPointerSelectionTime":2000,"subtitlesTextShadowColor":"#000000","playbackBarBackgroundOpacity":1,"playbackBarBorderColor":"#FFFFFF","doubleClickAction":"toggle_fullscreen","class":"ViewerArea","toolTipTextShadowColor":"#000000","playbackBarBorderRadius":0,"progressLeft":0,"width":"100%","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderColor":"#000000","propagateClick":false,"toolTipTextShadowOpacity":0,"playbackBarProgressBackgroundColorDirection":"vertical","subtitlesTextShadowHorizontalLength":1,"playbackBarProgressBorderRadius":0,"id":"MainViewer","subtitlesEnabled":true,"displayTooltipInTouchScreens":true,"progressBorderRadius":0,"borderSize":0,"toolTipShadowBlurRadius":3,"subtitlesShadow":false,"shadow":false,"toolTipFontWeight":"normal","playbackBarBackgroundColor":["#FFFFFF"],"toolTipFontColor":"#606060","transitionMode":"blending","displayTooltipInSurfaceSelection":true,"subtitlesHorizontalAlign":"center","playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeadShadowHorizontalLength":0,"toolTipFontFamily":"Arial","playbackBarHeadBorderRadius":0,"subtitlesTextShadowVerticalLength":1,"subtitlesOpacity":1,"subtitlesFontFamily":"Arial"},{"backgroundColorRatios":[],"data":{"name":"WebFrame7640"},"borderRadius":0,"insetBorder":false,"backgroundColorDirection":"vertical","paddingLeft":0,"paddingRight":0,"height":"100%","scrollEnabled":true,"toolTipHorizontalAlign":"center","class":"WebFrame","width":"100%","propagateClick":false,"backgroundColor":[],"backgroundOpacity":1,"id":"WebFrame_1C310919_0C31_A6A7_41A3_124CDF2970C5","paddingTop":0,"minHeight":0,"borderSize":0,"paddingBottom":0,"minWidth":0,"shadow":false},{"areas":["this.HotspotPanoramaOverlayArea_00F06A31_0C31_DAE7_419F_C104F06F954D"],"maps":[],"data":{"label":"res_B7287EDD_BAC4_2B6E_41DE_65C1BAEE01E1_0"},"useHandCursor":true,"id":"overlay_00D0397B_0C31_D95B_4185_914F51A3037D","items":[{"distance":50,"yaw":56.65,"hfov":34.93,"vfov":30.42,"image":"this.res_025F1D45_0C33_DEAF_41A3_F93E2440B11D","verticalAlign":"middle","data":{"label":"res_B7287EDD_BAC4_2B6E_41DE_65C1BAEE01E1_0"},"scaleMode":"fit_inside","pitch":-3.77,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage"}],"class":"HotspotPanoramaOverlay"},{"id":"sequence_0609C101_0C2E_E6A7_4181_C8246156D384","movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence"},{"id":"HotspotPanoramaOverlayArea_00F06A31_0C31_DAE7_419F_C104F06F954D","mapColor":"any","click":"this.WebFrame_1C310919_0C31_A6A7_41A3_124CDF2970C5.set('url', this.translate('PopupWebFrameBehaviour_024AFB7F_0C32_B95B_41A4_0AC5FA979622.url')); this.showWindow(this.window_035A7E5B_0C36_5B5B_4181_76F3F0F3C725, null, false)","class":"HotspotPanoramaOverlayArea"},{"class":"ImageResource","id":"res_025F1D45_0C33_DEAF_41A3_F93E2440B11D","levels":[{"width":293,"class":"ImageResourceLevel","height":220,"url":"media/res_025F1D45_0C33_DEAF_41A3_F93E2440B11D_0.png"}]}],"downloadEnabled":false,"scrollBarMargin":2,"toolTipHorizontalAlign":"center","class":"Player","mediaActivationMode":"window","scripts":{"getMediaHeight":TDV.Tour.Script.getMediaHeight,"translate":TDV.Tour.Script.translate,"playAudioList":TDV.Tour.Script.playAudioList,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"quizFinish":TDV.Tour.Script.quizFinish,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showPopupImage":TDV.Tour.Script.showPopupImage,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"historyGoBack":TDV.Tour.Script.historyGoBack,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"historyGoForward":TDV.Tour.Script.historyGoForward,"getKey":TDV.Tour.Script.getKey,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"getComponentByName":TDV.Tour.Script.getComponentByName,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getMediaByName":TDV.Tour.Script.getMediaByName,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"resumePlayers":TDV.Tour.Script.resumePlayers,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"openLink":TDV.Tour.Script.openLink,"init":TDV.Tour.Script.init,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"existsKey":TDV.Tour.Script.existsKey,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"registerKey":TDV.Tour.Script.registerKey,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"shareSocial":TDV.Tour.Script.shareSocial,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"downloadFile":TDV.Tour.Script.downloadFile,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"mixObject":TDV.Tour.Script.mixObject,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMainViewer":TDV.Tour.Script.getMainViewer,"showWindow":TDV.Tour.Script.showWindow,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setMapLocation":TDV.Tour.Script.setMapLocation,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setValue":TDV.Tour.Script.setValue,"cloneCamera":TDV.Tour.Script.cloneCamera,"getPixels":TDV.Tour.Script.getPixels,"isPanorama":TDV.Tour.Script.isPanorama,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setLocale":TDV.Tour.Script.setLocale,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizShowScore":TDV.Tour.Script.quizShowScore,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"quizStart":TDV.Tour.Script.quizStart,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"clone":TDV.Tour.Script.clone,"initQuiz":TDV.Tour.Script.initQuiz,"getOverlays":TDV.Tour.Script.getOverlays,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility},"width":"100%","propagateClick":false,"mobileMipmappingEnabled":false,"backgroundColor":["#FFFFFF"],"scrollBarOpacity":0.5,"layout":"absolute","backgroundOpacity":1,"id":"rootPlayer","paddingTop":0,"children":["this.MainViewer"],"gap":10,"minHeight":20,"borderSize":0,"paddingBottom":0,"minWidth":20,"shadow":false,"scrollBarColor":"#000000","backgroundPreloadEnabled":true,"defaultVRPointer":"laser","desktopMipmappingEnabled":false};
    if (b['data'] == undefined)
        b['data'] = {};
    b['data']['translateObjs'] = a;
    b['data']['history'] = {};
    b['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](b);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.25.js.map
//Generated with v2021.2.25, Thu Dec 30 2021