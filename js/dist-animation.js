var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var t, e, i, r, s, n, a, o, l, h, u, c, f, _, p, d;
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var r = function(t) {
                        var e, i = [],
                            r = t.length;
                        for (e = 0; e !== r; i.push(t[e++]));
                        return i
                    },
                    s = function(t, e, i) {
                        var r, s, n = t.cycle;
                        for (r in n) s = n[r], t[r] = "function" == typeof s ? s(i, e[i]) : s[i % s.length];
                        delete t.cycle
                    },
                    n = function(t, e, r) { i.call(this, t, e, r), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = n.prototype.render },
                    a = 1e-10,
                    o = i._internals,
                    l = o.isSelector,
                    h = o.isArray,
                    u = n.prototype = i.to({}, .1, {}),
                    c = [];
                n.version = "2.0.2", u.constructor = n, u.kill()._gc = !1, n.killTweensOf = n.killDelayedCallsTo = i.killTweensOf, n.getTweensOf = i.getTweensOf, n.lagSmoothing = i.lagSmoothing, n.ticker = i.ticker, n.render = i.render, u.invalidate = function() { return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this) }, u.updateTo = function(t, e) {
                    var r, s = this.ratio,
                        n = this.vars.immediateRender || t.immediateRender;
                    for (r in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), t) this.vars[r] = t[r];
                    if (this._initted || n)
                        if (e) this._initted = !1, n && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var a = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
                    } else if (this._initted = !1, this._init(), this._time > 0 || n)
                        for (var o, l = 1 / (1 - s), h = this._firstPT; h;) o = h.s + h.c, h.c *= l, h.s = o - h.c, h = h._next;
                    return this
                }, u.render = function(t, e, r) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var s, n, l, h, u, c, f, _, p, d = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._time,
                        g = this._totalTime,
                        v = this._cycle,
                        y = this._duration,
                        T = this._rawPrevTime;
                    if (t >= d - 1e-7 && t >= 0 ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, n = "onComplete", r = r || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || r) && (this._startTime === this._timeline._duration && (t = 0), (0 > T || 0 >= t && t >= -1e-7 || T === a && "isPause" !== this.data) && T !== t && (r = !0, T > a && (n = "onReverseComplete")), this._rawPrevTime = _ = !e || t || T === t ? t : a)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === y && T > 0) && (n = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || r) && (T >= 0 && (r = !0), this._rawPrevTime = _ = !e || t || T === t ? t : a)), this._initted || (r = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = y + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && t >= g && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 != (1 & this._cycle) && (this._time = y - this._time, (p = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== p || this._initted ? this._yoyoEase = p = !0 === p ? this._ease : p instanceof Ease ? p : Ease.map[p] : (p = this.vars.ease, this._yoyoEase = p = p ? p instanceof Ease ? p : "function" == typeof p ? new Ease(p, this.vars.easeParams) : Ease.map[p] || i.defaultEase : i.defaultEase)), this.ratio = p ? 1 - p.getRatio((y - this._time) / y) : 0)), this._time > y ? this._time = y : this._time < 0 && (this._time = 0)), this._easeType && !p ? (u = this._time / y, c = this._easeType, f = this._easePower, (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), 1 === c ? this.ratio = 1 - u : 2 === c ? this.ratio = u : this._time / y < .5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2) : p || (this.ratio = this._ease.getRatio(this._time / y))), m !== this._time || r || v !== this._cycle) {
                        if (!this._initted) { if (this._init(), !this._initted || this._gc) return; if (!r && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = g, this._rawPrevTime = T, this._cycle = v, o.lazyTweens.push(this), void(this._lazy = [t, e]);!this._time || s || p ? s && this._ease._calcEnd && !p && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / y) }
                        for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === g && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, !0, r) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === y) && (e || this._callback("onStart"))), l = this._firstPT; l;) l.f ? l.t[l.p](l.c * this.ratio + l.s) : l.t[l.p] = l.c * this.ratio + l.s, l = l._next;
                        this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, !0, r), e || (this._totalTime !== g || n) && this._callback("onUpdate")), this._cycle !== v && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), n && (!this._gc || r) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, r), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === y && this._rawPrevTime === a && _ !== a && (this._rawPrevTime = 0))
                    } else g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
                }, n.to = function(t, e, i) { return new n(t, e, i) }, n.from = function(t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new n(t, e, i) }, n.fromTo = function(t, e, i, r) { return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new n(t, e, r) }, n.staggerTo = n.allTo = function(t, e, a, o, u, f, _) {
                    o = o || 0;
                    var p, d, m, g, v = 0,
                        y = [],
                        T = function() { a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), u.apply(_ || a.callbackScope || this, f || c) },
                        x = a.cycle,
                        w = a.startAt && a.startAt.cycle;
                    for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = r(t))), t = t || [], 0 > o && ((t = r(t)).reverse(), o *= -1), p = t.length - 1, m = 0; p >= m; m++) {
                        for (g in d = {}, a) d[g] = a[g];
                        if (x && (s(d, t, m), null != d.duration && (e = d.duration, delete d.duration)), w) {
                            for (g in w = d.startAt = {}, a.startAt) w[g] = a.startAt[g];
                            s(d.startAt, t, m)
                        }
                        d.delay = v + (d.delay || 0), m === p && u && (d.onComplete = T), y[m] = new n(t[m], e, d), v += o
                    }
                    return y
                }, n.staggerFrom = n.allFrom = function(t, e, i, r, s, a, o) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, n.staggerTo(t, e, i, r, s, a, o) }, n.staggerFromTo = n.allFromTo = function(t, e, i, r, s, a, o, l) { return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, n.staggerTo(t, e, r, s, a, o, l) }, n.delayedCall = function(t, e, i, r, s) { return new n(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: r, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, useFrames: s, overwrite: 0 }) }, n.set = function(t, e) { return new n(t, 0, e) }, n.isTweening = function(t) { return i.getTweensOf(t, !0).length > 0 };
                var f = function(t, e) { for (var r = [], s = 0, n = t._first; n;) n instanceof i ? r[s++] = n : (e && (r[s++] = n), s = (r = r.concat(f(n, e))).length), n = n._next; return r },
                    _ = n.getAllTweens = function(e) { return f(t._rootTimeline, e).concat(f(t._rootFramesTimeline, e)) };
                n.killAll = function(t, i, r, s) {
                    null == i && (i = !0), null == r && (r = !0);
                    var n, a, o, l = _(0 != s),
                        h = l.length,
                        u = i && r && s;
                    for (o = 0; h > o; o++) a = l[o], (u || a instanceof e || (n = a.target === a.vars.onComplete) && r || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                }, n.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var s, a, u, c, f, _ = o.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = r(t)), h(t))
                            for (c = t.length; --c > -1;) n.killChildTweensOf(t[c], e);
                        else {
                            for (u in s = [], _)
                                for (a = _[u].target.parentNode; a;) a === t && (s = s.concat(_[u].tweens)), a = a.parentNode;
                            for (f = s.length, c = 0; f > c; c++) e && s[c].totalTime(s[c].totalDuration()), s[c]._enabled(!1, !1)
                        }
                    }
                };
                var p = function(t, i, r, s) { i = !1 !== i, r = !1 !== r; for (var n, a, o = _(s = !1 !== s), l = i && r && s, h = o.length; --h > -1;) a = o[h], (l || a instanceof e || (n = a.target === a.vars.onComplete) && r || i && !n) && a.paused(t) };
                return n.pauseAll = function(t, e, i) { p(!0, t, e, i) }, n.resumeAll = function(t, e, i) { p(!1, t, e, i) }, n.globalTimeScale = function(e) {
                    var r = t._rootTimeline,
                        s = i.ticker.time;
                    return arguments.length ? (e = e || a, r._startTime = s - (s - r._startTime) * r._timeScale / e, r = t._rootFramesTimeline, s = i.ticker.frame, r._startTime = s - (s - r._startTime) * r._timeScale / e, r._timeScale = t._rootTimeline._timeScale = e, e) : r._timeScale
                }, u.progress = function(t, e) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() }, u.totalProgress = function(t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() }, u.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time }, u.duration = function(e) { return arguments.length ? t.prototype.duration.call(this, e) : this._duration }, u.totalDuration = function(t) { return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration) }, u.repeat = function(t) { return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat }, u.repeatDelay = function(t) { return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay }, u.yoyo = function(t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, n
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var r = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, r, s = this.vars;
                        for (r in s) i = s[r], l(i) && -1 !== i.join("").indexOf("{self}") && (s[r] = this._swapSelfInParams(i));
                        l(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
                    },
                    s = 1e-10,
                    n = i._internals,
                    a = r._internals = {},
                    o = n.isSelector,
                    l = n.isArray,
                    h = n.lazyTweens,
                    u = n.lazyRender,
                    c = _gsScope._gsDefine.globals,
                    f = function(t) { var e, i = {}; for (e in t) i[e] = t[e]; return i },
                    _ = function(t, e, i) {
                        var r, s, n = t.cycle;
                        for (r in n) s = n[r], t[r] = "function" == typeof s ? s(i, e[i]) : s[i % s.length];
                        delete t.cycle
                    },
                    p = a.pauseCallback = function() {},
                    d = function(t) {
                        var e, i = [],
                            r = t.length;
                        for (e = 0; e !== r; i.push(t[e++]));
                        return i
                    },
                    m = r.prototype = new e;
                return r.version = "2.0.2", m.constructor = r, m.kill()._gc = m._forcingPlayhead = m._hasPause = !1, m.to = function(t, e, r, s) { var n = r.repeat && c.TweenMax || i; return e ? this.add(new n(t, e, r), s) : this.set(t, r, s) }, m.from = function(t, e, r, s) { return this.add((r.repeat && c.TweenMax || i).from(t, e, r), s) }, m.fromTo = function(t, e, r, s, n) { var a = s.repeat && c.TweenMax || i; return e ? this.add(a.fromTo(t, e, r, s), n) : this.set(t, s, n) }, m.staggerTo = function(t, e, s, n, a, l, h, u) {
                    var c, p, m = new r({ onComplete: l, onCompleteParams: h, callbackScope: u, smoothChildTiming: this.smoothChildTiming }),
                        g = s.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t), o(t = t || []) && (t = d(t)), 0 > (n = n || 0) && ((t = d(t)).reverse(), n *= -1), p = 0; p < t.length; p++)(c = f(s)).startAt && (c.startAt = f(c.startAt), c.startAt.cycle && _(c.startAt, t, p)), g && (_(c, t, p), null != c.duration && (e = c.duration, delete c.duration)), m.to(t[p], e, c, p * n);
                    return this.add(m, a)
                }, m.staggerFrom = function(t, e, i, r, s, n, a, o) { return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, r, s, n, a, o) }, m.staggerFromTo = function(t, e, i, r, s, n, a, o, l) { return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, r, s, n, a, o, l) }, m.call = function(t, e, r, s) { return this.add(i.delayedCall(0, t, e, r), s) }, m.set = function(t, e, r) { return r = this._parseTimeOrLabel(r, 0, !0), null == e.immediateRender && (e.immediateRender = r === this._time && !this._paused), this.add(new i(t, 0, e), r) }, r.exportRoot = function(t, e) {
                    null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                    var s, n, a, o, l = new r(t),
                        h = l._timeline;
                    for (null == e && (e = !0), h._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = h._time, a = h._first; a;) o = a._next, e && a instanceof i && a.target === a.vars.onComplete || (0 > (n = a._startTime - a._delay) && (s = 1), l.add(a, n)), a = o;
                    return h.add(l, 0), s && l.totalDuration(), l
                }, m.add = function(s, n, a, o) {
                    var h, u, c, f, _, p;
                    if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, s)), !(s instanceof t)) {
                        if (s instanceof Array || s && s.push && l(s)) { for (a = a || "normal", o = o || 0, h = n, u = s.length, c = 0; u > c; c++) l(f = s[c]) && (f = new r({ tweens: f })), this.add(f, h), "string" != typeof f && "function" != typeof f && ("sequence" === a ? h = f._startTime + f.totalDuration() / f._timeScale : "start" === a && (f._startTime -= f.delay())), h += o; return this._uncache(!0) }
                        if ("string" == typeof s) return this.addLabel(s, n);
                        if ("function" != typeof s) throw "Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";
                        s = i.delayedCall(0, s)
                    }
                    if (e.prototype.add.call(this, s, n), s._time && (h = Math.max(0, Math.min(s.totalDuration(), (this.rawTime() - s._startTime) * s._timeScale)), Math.abs(h - s._totalTime) > 1e-5 && s.render(h, !1, !1)), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (p = (_ = this).rawTime() > s._startTime; _._timeline;) p && _._timeline.smoothChildTiming ? _.totalTime(_._totalTime, !0) : _._gc && _._enabled(!0, !1), _ = _._timeline;
                    return this
                }, m.remove = function(e) { if (e instanceof t) { this._remove(e, !1); var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline; return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this } if (e instanceof Array || e && e.push && l(e)) { for (var r = e.length; --r > -1;) this.remove(e[r]); return this } return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e) }, m._remove = function(t, i) { return e.prototype._remove.call(this, t, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this }, m.append = function(t, e) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t)) }, m.insert = m.insertMultiple = function(t, e, i, r) { return this.add(t, e || 0, i, r) }, m.appendMultiple = function(t, e, i, r) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, r) }, m.addLabel = function(t, e) { return this._labels[t] = this._parseTimeOrLabel(e), this }, m.addPause = function(t, e, r, s) { var n = i.delayedCall(0, p, r, s || this); return n.vars.onComplete = n.vars.onReverseComplete = e, n.data = "isPause", this._hasPause = !0, this.add(n, t) }, m.removeLabel = function(t) { return delete this._labels[t], this }, m.getLabelTime = function(t) { return null != this._labels[t] ? this._labels[t] : -1 }, m._parseTimeOrLabel = function(e, i, r, s) {
                    var n, a;
                    if (s instanceof t && s.timeline === this) this.remove(s);
                    else if (s && (s instanceof Array || s.push && l(s)))
                        for (a = s.length; --a > -1;) s[a] instanceof t && s[a].timeline === this && this.remove(s[a]);
                    if (n = "number" != typeof e || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof i) return this._parseTimeOrLabel(i, r && "number" == typeof e && null == this._labels[i] ? e - n : 0, r);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = n);
                    else {
                        if (-1 === (a = e.indexOf("="))) return null == this._labels[e] ? r ? this._labels[e] = n + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(a - 1) + "1", 10) * Number(e.substr(a + 1)), e = a > 1 ? this._parseTimeOrLabel(e.substr(0, a - 1), 0, r) : n
                    }
                    return Number(e) + i
                }, m.seek = function(t, e) { return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e) }, m.stop = function() { return this.paused(!0) }, m.gotoAndPlay = function(t, e) { return this.play(t, e) }, m.gotoAndStop = function(t, e) { return this.pause(t, e) }, m.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var r, n, a, o, l, c, f, _ = this._time,
                        p = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._startTime,
                        m = this._timeScale,
                        g = this._paused;
                    if (_ !== this._time && (t += this._time - _), t >= p - 1e-7 && t >= 0) this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === s) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > s && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, t = p + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== _ || 0 === this._duration && this._rawPrevTime !== s && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = n = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, 0 === t && n)
                                for (r = this._first; r && 0 === r._startTime;) r._duration || (n = !1), r = r._next;
                            t = 0, this._initted || (l = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= _)
                                for (r = this._first; r && r._startTime <= t && !c;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (c = r), r = r._next;
                            else
                                for (r = this._last; r && r._startTime >= t && !c;) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (c = r), r = r._prev;
                            c && (this._time = t = c._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== _ && this._first || i || l || c) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== _ && t > 0 && (this._active = !0), 0 === _ && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (f = this._time) >= _)
                            for (r = this._first; r && (a = r._next, f === this._time && (!this._paused || g));)(r._active || r._startTime <= f && !r._paused && !r._gc) && (c === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = a;
                        else
                            for (r = this._last; r && (a = r._prev, f === this._time && (!this._paused || g));) {
                                if (r._active || r._startTime <= _ && !r._paused && !r._gc) {
                                    if (c === r) {
                                        for (c = r._prev; c && c.endTime() > this._time;) c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, i), c = c._prev;
                                        c = null, this.pause()
                                    }
                                    r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)
                                }
                                r = a
                            }
                        this._onUpdate && (e || (h.length && u(), this._callback("onUpdate"))), o && (this._gc || (d === this._startTime || m !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (n && (h.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
                    }
                }, m._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof r && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, m.getChildren = function(t, e, r, s) { s = s || -9999999999; for (var n = [], a = this._first, o = 0; a;) a._startTime < s || (a instanceof i ? !1 !== e && (n[o++] = a) : (!1 !== r && (n[o++] = a), !1 !== t && (o = (n = n.concat(a.getChildren(!0, e, r))).length))), a = a._next; return n }, m.getTweensOf = function(t, e) {
                    var r, s, n = this._gc,
                        a = [],
                        o = 0;
                    for (n && this._enabled(!0, !0), s = (r = i.getTweensOf(t)).length; --s > -1;)(r[s].timeline === this || e && this._contains(r[s])) && (a[o++] = r[s]);
                    return n && this._enabled(!1, !0), a
                }, m.recent = function() { return this._recent }, m._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, m.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var r, s = this._first, n = this._labels; s;) s._startTime >= i && (s._startTime += t), s = s._next;
                    if (e)
                        for (r in n) n[r] >= i && (n[r] += t);
                    return this._uncache(!0)
                }, m._kill = function(t, e) { if (!t && !e) return this._enabled(!1, !1); for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), r = i.length, s = !1; --r > -1;) i[r]._kill(t, e) && (s = !0); return s }, m.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return !1 !== t && (this._labels = {}), this._uncache(!0)
                }, m.invalidate = function() { for (var e = this._first; e;) e.invalidate(), e = e._next; return t.prototype.invalidate.call(this) }, m._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var r = this._first; r;) r._enabled(t, !0), r = r._next;
                    return e.prototype._enabled.call(this, t, i)
                }, m.totalTime = function(e, i, r) { this._forcingPlayhead = !0; var s = t.prototype.totalTime.apply(this, arguments); return this._forcingPlayhead = !1, s }, m.duration = function(t) { return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration) }, m.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, r = 0, s = this._last, n = 999999999999; s;) e = s._prev, s._dirty && s.totalDuration(), s._startTime > n && this._sortChildren && !s._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(s, s._startTime - s._delay), this._calculatingDuration = 0) : n = s._startTime, s._startTime < 0 && !s._paused && (r -= s._startTime, this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale, this._time -= s._startTime, this._totalTime -= s._startTime, this._rawPrevTime -= s._startTime), this.shiftChildren(-s._startTime, !1, -9999999999), n = 0), (i = s._startTime + s._totalDuration / s._timeScale) > r && (r = i), s = e;
                            this._duration = this._totalDuration = r, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                }, m.paused = function(e) {
                    if (!e)
                        for (var i = this._first, r = this._time; i;) i._startTime === r && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, m.usesFrames = function() { for (var e = this._timeline; e._timeline;) e = e._timeline; return e === t._rootFramesTimeline }, m.rawTime = function(t) { return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale }, r
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var r = function(e) { t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0 },
                    s = 1e-10,
                    n = e._internals,
                    a = n.lazyTweens,
                    o = n.lazyRender,
                    l = _gsScope._gsDefine.globals,
                    h = new i(null, null, 1, 0),
                    u = r.prototype = new t;
                return u.constructor = r, u.kill()._gc = !1, r.version = "2.0.2", u.invalidate = function() { return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this) }, u.addCallback = function(t, i, r, s) { return this.add(e.delayedCall(0, t, r, s), i) }, u.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), r = i.length, s = this._parseTimeOrLabel(e); --r > -1;) i[r]._startTime === s && i[r]._enabled(!1, !1);
                    return this
                }, u.removePause = function(e) { return this.removeCallback(t._internals.pauseCallback, e) }, u.tweenTo = function(t, i) {
                    i = i || {};
                    var r, s, n, a = { ease: h, useFrames: this.usesFrames(), immediateRender: !1, lazy: !1 },
                        o = i.repeat && l.TweenMax || e;
                    for (s in i) a[s] = i[s];
                    return a.time = this._parseTimeOrLabel(t), r = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, n = new o(this, r, a), a.onStart = function() { n.target.paused(!0), n.vars.time === n.target.time() || r !== n.duration() || n.isFromTo || n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale).render(n.time(), !0, !0), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || n, i.onStartParams || []) }, n
                }, u.tweenFromTo = function(t, e, i) { i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = { onComplete: this.seek, onCompleteParams: [t], callbackScope: this }, i.immediateRender = !1 !== i.immediateRender; var r = this.tweenTo(e, i); return r.isFromTo = 1, r.duration(Math.abs(r.vars.time - t) / this._timeScale || .001) }, u.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var r, n, l, h, u, c, f, _, p = this._time,
                        d = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._duration,
                        g = this._totalTime,
                        v = this._startTime,
                        y = this._timeScale,
                        T = this._rawPrevTime,
                        x = this._paused,
                        w = this._cycle;
                    if (p !== this._time && (t += this._time - p), t >= d - 1e-7 && t >= 0) this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (n = !0, h = "onComplete", u = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > T || T === s) && T !== t && this._first && (u = !0, T > s && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = m, t = m + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== p || 0 === m && T !== s && (T > 0 || 0 > t && T >= 0) && !this._locked) && (h = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (u = n = !0, h = "onReverseComplete") : T >= 0 && this._first && (u = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : s, 0 === t && n)
                                for (r = this._first; r && 0 === r._startTime;) r._duration || (n = !1), r = r._next;
                            t = 0, this._initted || (u = !0)
                        }
                    else if (0 === m && 0 > T && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (c = m + this._repeatDelay, this._cycle = this._totalTime / c >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && t >= g && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, t = m + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                        if ((t = this._time) >= p || this._repeat && w !== this._cycle)
                            for (r = this._first; r && r._startTime <= t && !f;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (f = r), r = r._next;
                        else
                            for (r = this._last; r && r._startTime >= t && !f;) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (f = r), r = r._prev;
                        f && f._startTime < m && (this._time = t = f._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== w && !this._locked) {
                        var b = this._yoyo && 0 != (1 & w),
                            P = b === (this._yoyo && 0 != (1 & this._cycle)),
                            S = this._totalTime,
                            O = this._cycle,
                            k = this._rawPrevTime,
                            R = this._time;
                        if (this._totalTime = w * m, this._cycle < w ? b = !b : this._totalTime += m, this._time = p, this._rawPrevTime = 0 === m ? T - 1e-4 : T, this._cycle = w, this._locked = !0, p = b ? 0 : m, this.render(p, e, 0 === m), e || this._gc || this.vars.onRepeat && (this._cycle = O, this._locked = !1, this._callback("onRepeat")), p !== this._time) return;
                        if (P && (this._cycle = w, this._locked = !0, p = b ? m + 1e-4 : -1e-4, this.render(p, !0, !1)), this._locked = !1, this._paused && !x) return;
                        this._time = R, this._totalTime = S, this._cycle = O, this._rawPrevTime = k
                    }
                    if (this._time !== p && this._first || i || u || f) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (_ = this._time) >= p)
                            for (r = this._first; r && (l = r._next, _ === this._time && (!this._paused || x));)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (f === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = l;
                        else
                            for (r = this._last; r && (l = r._prev, _ === this._time && (!this._paused || x));) {
                                if (r._active || r._startTime <= p && !r._paused && !r._gc) {
                                    if (f === r) {
                                        for (f = r._prev; f && f.endTime() > this._time;) f.render(f._reversed ? f.totalDuration() - (t - f._startTime) * f._timeScale : (t - f._startTime) * f._timeScale, e, i), f = f._prev;
                                        f = null, this.pause()
                                    }
                                    r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)
                                }
                                r = l
                            }
                        this._onUpdate && (e || (a.length && o(), this._callback("onUpdate"))), h && (this._locked || this._gc || (v === this._startTime || y !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (n && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)))
                    } else g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
                }, u.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var r, s, n = [],
                        a = this.getChildren(t, e, i),
                        o = 0,
                        l = a.length;
                    for (r = 0; l > r; r++)(s = a[r]).isActive() && (n[o++] = s);
                    return n
                }, u.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        r = i.length;
                    for (e = 0; r > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, u.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (e[i].time < t) return e[i].name;
                    return null
                }, u.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = { time: this._labels[t], name: t };
                    return e.sort(function(t, e) { return t.time - e.time }), e
                }, u.invalidate = function() { return this._locked = !1, t.prototype.invalidate.call(this) }, u.progress = function(t, e) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0 }, u.totalProgress = function(t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0 }, u.totalDuration = function(e) { return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration) }, u.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time }, u.repeat = function(t) { return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat }, u.repeatDelay = function(t) { return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay }, u.yoyo = function(t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, u.currentLabel = function(t) { return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8) }, r
            }, !0), t = 180 / Math.PI, e = [], i = [], r = [], s = {}, n = _gsScope._gsDefine.globals, a = function(t, e, i, r) { i === r && (i = r - (r - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = r, this.da = r - t, this.ca = i - t, this.ba = e - t }, o = function(t, e, i, r) {
                var s = { a: t },
                    n = {},
                    a = {},
                    o = { c: r },
                    l = (t + e) / 2,
                    h = (e + i) / 2,
                    u = (i + r) / 2,
                    c = (l + h) / 2,
                    f = (h + u) / 2,
                    _ = (f - c) / 8;
                return s.b = l + (t - l) / 4, n.b = c + _, s.c = n.a = (s.b + n.b) / 2, n.c = a.a = (c + f) / 2, a.b = f - _, o.b = u + (r - u) / 4, a.c = o.a = (a.b + o.b) / 2, [s, n, a, o]
            }, l = function(t, s, n, a, l) {
                var h, u, c, f, _, p, d, m, g, v, y, T, x, w = t.length - 1,
                    b = 0,
                    P = t[0].a;
                for (h = 0; w > h; h++) u = (_ = t[b]).a, c = _.d, f = t[b + 1].d, l ? (y = e[h], x = ((T = i[h]) + y) * s * .25 / (a ? .5 : r[h] || .5), m = c - ((p = c - (c - u) * (a ? .5 * s : 0 !== y ? x / y : 0)) + (((d = c + (f - c) * (a ? .5 * s : 0 !== T ? x / T : 0)) - p) * (3 * y / (y + T) + .5) / 4 || 0))) : m = c - ((p = c - (c - u) * s * .5) + (d = c + (f - c) * s * .5)) / 2, p += m, d += m, _.c = g = p, _.b = 0 !== h ? P : P = _.a + .6 * (_.c - _.a), _.da = c - u, _.ca = g - u, _.ba = P - u, n ? (v = o(u, P, g, c), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, P = d;
                (_ = t[b]).b = P, _.c = P + .4 * (_.d - P), _.da = _.d - _.a, _.ca = _.c - _.a, _.ba = P - _.a, n && (v = o(_.a, P, _.c, _.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
            }, h = function(t, r, s, n) {
                var o, l, h, u, c, f, _ = [];
                if (n)
                    for (l = (t = [n].concat(t)).length; --l > -1;) "string" == typeof(f = t[l][r]) && "=" === f.charAt(1) && (t[l][r] = n[r] + Number(f.charAt(0) + f.substr(2)));
                if (0 > (o = t.length - 2)) return _[0] = new a(t[0][r], 0, 0, t[0][r]), _;
                for (l = 0; o > l; l++) h = t[l][r], u = t[l + 1][r], _[l] = new a(h, 0, 0, u), s && (c = t[l + 2][r], e[l] = (e[l] || 0) + (u - h) * (u - h), i[l] = (i[l] || 0) + (c - u) * (c - u));
                return _[l] = new a(t[l][r], 0, 0, t[l + 1][r]), _
            }, u = function(t, n, a, o, u, c) {
                var f, _, p, d, m, g, v, y, T = {},
                    x = [],
                    w = c || t[0];
                for (_ in u = "string" == typeof u ? "," + u + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == n && (n = 1), t[0]) x.push(_);
                if (t.length > 1) {
                    for (y = t[t.length - 1], v = !0, f = x.length; --f > -1;)
                        if (_ = x[f], Math.abs(w[_] - y[_]) > .05) { v = !1; break }
                    v && (t = t.concat(), c && t.unshift(c), t.push(t[1]), c = t[t.length - 3])
                }
                for (e.length = i.length = r.length = 0, f = x.length; --f > -1;) _ = x[f], s[_] = -1 !== u.indexOf("," + _ + ","), T[_] = h(t, _, s[_], c);
                for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
                if (!o) {
                    for (f = x.length; --f > -1;)
                        if (s[_])
                            for (g = (p = T[x[f]]).length - 1, d = 0; g > d; d++) m = p[d + 1].da / i[d] + p[d].da / e[d] || 0, r[d] = (r[d] || 0) + m * m;
                    for (f = r.length; --f > -1;) r[f] = Math.sqrt(r[f])
                }
                for (f = x.length, d = a ? 4 : 1; --f > -1;) p = T[_ = x[f]], l(p, n, a, o, s[_]), v && (p.splice(0, d), p.splice(p.length - d, d));
                return T
            }, c = function(t, e, i) {
                var r, s, n, o, l, h, u, c, f, _, p, d = {},
                    m = "cubic" === (e = e || "soft") ? 3 : 2,
                    g = "soft" === e,
                    v = [];
                if (g && i && (t = [i].concat(t)), null == t || t.length < m + 1) throw "invalid Bezier data";
                for (f in t[0]) v.push(f);
                for (h = v.length; --h > -1;) {
                    for (d[f = v[h]] = l = [], _ = 0, c = t.length, u = 0; c > u; u++) r = null == i ? t[u][f] : "string" == typeof(p = t[u][f]) && "=" === p.charAt(1) ? i[f] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && u > 1 && c - 1 > u && (l[_++] = (r + l[_ - 2]) / 2), l[_++] = r;
                    for (c = _ - m + 1, _ = 0, u = 0; c > u; u += m) r = l[u], s = l[u + 1], n = l[u + 2], o = 2 === m ? 0 : l[u + 3], l[_++] = p = 3 === m ? new a(r, s, n, o) : new a(r, (2 * s + r) / 3, (2 * s + n) / 3, n);
                    l.length = _
                }
                return d
            }, f = function(t, e, i) {
                for (var r, s, n, a, o, l, h, u, c, f, _, p = 1 / i, d = t.length; --d > -1;)
                    for (n = (f = t[d]).a, a = f.d - n, o = f.c - n, l = f.b - n, r = s = 0, u = 1; i >= u; u++) r = s - (s = ((h = p * u) * h * a + 3 * (c = 1 - h) * (h * o + c * l)) * h), e[_ = d * i + u - 1] = (e[_] || 0) + r * r
            }, _ = function(t, e) {
                var i, r, s, n, a = [],
                    o = [],
                    l = 0,
                    h = 0,
                    u = (e = e >> 0 || 6) - 1,
                    c = [],
                    _ = [];
                for (i in t) f(t[i], a, e);
                for (s = a.length, r = 0; s > r; r++) l += Math.sqrt(a[r]), _[n = r % e] = l, n === u && (h += l, c[n = r / e >> 0] = _, o[n] = h, l = 0, _ = []);
                return { length: h, lengths: o, segments: c }
            }, p = _gsScope._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.8",
                API: 2,
                global: !0,
                init: function(t, e, i) {
                    this._target = t, e instanceof Array && (e = { values: e }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                    var r, s, n, a, o, l = e.values || [],
                        h = {},
                        f = l[0],
                        p = e.autoRotate || i.vars.orientToBezier;
                    for (r in this._autoRotate = p ? p instanceof Array ? p : [
                            ["x", "y", "rotation", !0 === p ? 0 : Number(p) || 0]
                        ] : null, f) this._props.push(r);
                    for (n = this._props.length; --n > -1;) r = this._props[n], this._overwriteProps.push(r), s = this._func[r] = "function" == typeof t[r], h[r] = s ? t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(t[r]), o || h[r] !== l[0][r] && (o = h);
                    if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : c(l, e.type, h), this._segCount = this._beziers[r].length, this._timeRes) {
                        var d = _(this._beziers, this._timeRes);
                        this._length = d.length, this._lengths = d.lengths, this._segments = d.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                    }
                    if (p = this._autoRotate)
                        for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), n = p.length; --n > -1;) {
                            for (a = 0; 3 > a; a++) r = p[n][a], this._func[r] = "function" == typeof t[r] && t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)];
                            r = p[n][2], this._initialRotations[n] = (this._func[r] ? this._func[r].call(this._target) : this._target[r]) || 0, this._overwriteProps.push(r)
                        }
                    return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                },
                set: function(e) {
                    var i, r, s, n, a, o, l, h, u, c, f = this._segCount,
                        _ = this._func,
                        p = this._target,
                        d = e !== this._startRatio;
                    if (this._timeRes) {
                        if (u = this._lengths, c = this._curSeg, e *= this._length, s = this._li, e > this._l2 && f - 1 > s) {
                            for (h = f - 1; h > s && (this._l2 = u[++s]) <= e;);
                            this._l1 = u[s - 1], this._li = s, this._curSeg = c = this._segments[s], this._s2 = c[this._s1 = this._si = 0]
                        } else if (e < this._l1 && s > 0) {
                            for (; s > 0 && (this._l1 = u[--s]) >= e;);
                            0 === s && e < this._l1 ? this._l1 = 0 : s++, this._l2 = u[s], this._li = s, this._curSeg = c = this._segments[s], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                        }
                        if (i = s, e -= this._l1, s = this._si, e > this._s2 && s < c.length - 1) {
                            for (h = c.length - 1; h > s && (this._s2 = c[++s]) <= e;);
                            this._s1 = c[s - 1], this._si = s
                        } else if (e < this._s1 && s > 0) {
                            for (; s > 0 && (this._s1 = c[--s]) >= e;);
                            0 === s && e < this._s1 ? this._s1 = 0 : s++, this._s2 = c[s], this._si = s
                        }
                        o = (s + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                    } else o = (e - (i = 0 > e ? 0 : e >= 1 ? f - 1 : f * e >> 0) * (1 / f)) * f;
                    for (r = 1 - o, s = this._props.length; --s > -1;) n = this._props[s], l = (o * o * (a = this._beziers[n][i]).da + 3 * r * (o * a.ca + r * a.ba)) * o + a.a, this._mod[n] && (l = this._mod[n](l, p)), _[n] ? p[n](l) : p[n] = l;
                    if (this._autoRotate) { var m, g, v, y, T, x, w, b = this._autoRotate; for (s = b.length; --s > -1;) n = b[s][2], x = b[s][3] || 0, w = !0 === b[s][4] ? 1 : t, a = this._beziers[b[s][0]], m = this._beziers[b[s][1]], a && m && (a = a[i], m = m[i], g = a.a + (a.b - a.a) * o, g += ((y = a.b + (a.c - a.b) * o) - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = m.a + (m.b - m.a) * o, v += ((T = m.b + (m.c - m.b) * o) - v) * o, T += (m.c + (m.d - m.c) * o - T) * o, l = d ? Math.atan2(T - v, y - g) * w + x : this._initialRotations[s], this._mod[n] && (l = this._mod[n](l, p)), _[n] ? p[n](l) : p[n] = l) }
                }
            }), d = p.prototype, p.bezierThrough = u, p.cubicToQuadratic = o, p._autoCSS = !0, p.quadraticToCubic = function(t, e, i) { return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i) }, p._cssRegister = function() {
                var t = n.CSSPlugin;
                if (t) {
                    var e = t._internals,
                        i = e._parseToProxy,
                        r = e._setPluginRatio,
                        s = e.CSSPropTween;
                    e._registerComplexSpecialProp("bezier", {
                        parser: function(t, e, n, a, o, l) {
                            e instanceof Array && (e = { values: e }), l = new p;
                            var h, u, c, f = e.values,
                                _ = f.length - 1,
                                d = [],
                                m = {};
                            if (0 > _) return o;
                            for (h = 0; _ >= h; h++) c = i(t, f[h], a, o, l, _ !== h), d[h] = c.end;
                            for (u in e) m[u] = e[u];
                            return m.values = d, (o = new s(t, "bezier", 0, 0, c.pt, 2)).data = c, o.plugin = l, o.setRatio = r, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (h = !0 === m.autoRotate ? 0 : Number(m.autoRotate), m.autoRotate = null != c.end.left ? [
                                ["left", "top", "rotation", h, !1]
                            ] : null != c.end.x && [
                                ["x", "y", "rotation", h, !1]
                            ]), m.autoRotate && (a._transform || a._enableTransforms(!1), c.autoRotate = a._target._gsTransform, c.proxy.rotation = c.autoRotate.rotation || 0, a._overwriteProps.push("rotation")), l._onInitTween(c.proxy, m, a._tween), o
                        }
                    })
                }
            }, d._mod = function(t) { for (var e, i = this._overwriteProps, r = i.length; --r > -1;)(e = t[i[r]]) && "function" == typeof e && (this._mod[i[r]] = e) }, d._kill = function(t) {
                var e, i, r = this._props;
                for (e in this._beziers)
                    if (e in t)
                        for (delete this._beziers[e], delete this._func[e], i = r.length; --i > -1;) r[i] === e && r.splice(i, 1);
                if (r = this._autoRotate)
                    for (i = r.length; --i > -1;) t[r[i][2]] && r.splice(i, 1);
                return this._super._kill.call(this, t)
            }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, r, s, n, a = function() { t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio },
                    o = _gsScope._gsDefine.globals,
                    l = {},
                    h = a.prototype = new t("css");
                h.constructor = a, a.version = "2.0.2", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, h = "px", a.suffixMap = { top: h, right: h, bottom: h, left: h, width: h, height: h, fontSize: h, padding: h, margin: h, perspective: h, lineHeight: "" };
                var u, c, f, _, p, d, m, g, v = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    T = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    w = /(?:\d|\-|\+|=|#|\.)*/g,
                    b = /opacity *= *([^)]*)/i,
                    P = /opacity:([^;]*)/i,
                    S = /alpha\(opacity *=.+?\)/i,
                    O = /^(rgb|hsl)/,
                    k = /([A-Z])/g,
                    R = /-([a-z])/gi,
                    C = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    A = function(t, e) { return e.toUpperCase() },
                    M = /(?:Left|Right|Width)/i,
                    D = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    E = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    F = /,(?=[^\)]*(?:\(|$))/gi,
                    z = /[\s,\(]/i,
                    L = Math.PI / 180,
                    N = 180 / Math.PI,
                    I = {},
                    X = { style: {} },
                    B = _gsScope.document || { createElement: function() { return X } },
                    j = function(t, e) { return B.createElementNS ? B.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : B.createElement(t) },
                    Y = j("div"),
                    U = j("img"),
                    V = a._internals = { _specialProps: l },
                    q = (_gsScope.navigator || {}).userAgent || "",
                    W = function() {
                        var t = q.indexOf("Android"),
                            e = j("a");
                        return f = -1 !== q.indexOf("Safari") && -1 === q.indexOf("Chrome") && (-1 === t || parseFloat(q.substr(t + 8, 2)) > 3), p = f && parseFloat(q.substr(q.indexOf("Version/") + 8, 2)) < 6, _ = -1 !== q.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(q) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(q)) && (d = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                    }(),
                    H = function(t) { return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1 },
                    G = function(t) { _gsScope.console && console.log(t) },
                    $ = "",
                    Z = "",
                    Q = function(t, e) { var i, r, s = (e = e || Y).style; if (void 0 !== s[t]) return t; for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === s[i[r] + t];); return r >= 0 ? ($ = "-" + (Z = 3 === r ? "ms" : i[r]).toLowerCase() + "-", Z + t) : null },
                    K = ("undefined" != typeof window ? window : B.defaultView || { getComputedStyle: function() {} }).getComputedStyle,
                    J = a.getStyle = function(t, e, i, r, s) { var n; return W || "opacity" !== e ? (!r && t.style[e] ? n = t.style[e] : (i = i || K(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == s || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : s) : H(t) },
                    tt = V.convertToPixels = function(t, i, r, s, n) {
                        if ("px" === s || !s && "lineHeight" !== i) return r;
                        if ("auto" === s || !r) return 0;
                        var o, l, h, u = M.test(i),
                            c = t,
                            f = Y.style,
                            _ = 0 > r,
                            p = 1 === r;
                        if (_ && (r = -r), p && (r *= 100), "lineHeight" !== i || s)
                            if ("%" === s && -1 !== i.indexOf("border")) o = r / 100 * (u ? t.clientWidth : t.clientHeight);
                            else {
                                if (f.cssText = "border:0 solid red;position:" + J(t, "position") + ";line-height:0;", "%" !== s && c.appendChild && "v" !== s.charAt(0) && "rem" !== s) f[u ? "borderLeftWidth" : "borderTopWidth"] = r + s;
                                else {
                                    if (c = t.parentNode || B.body, -1 !== J(c, "display").indexOf("flex") && (f.position = "absolute"), l = c._gsCache, h = e.ticker.frame, l && u && l.time === h) return l.width * r / 100;
                                    f[u ? "width" : "height"] = r + s
                                }
                                c.appendChild(Y), o = parseFloat(Y[u ? "offsetWidth" : "offsetHeight"]), c.removeChild(Y), u && "%" === s && !1 !== a.cacheWidths && ((l = c._gsCache = c._gsCache || {}).time = h, l.width = o / r * 100), 0 !== o || n || (o = tt(t, i, r, s, !0))
                            }
                        else l = K(t).lineHeight, t.style.lineHeight = r, o = parseFloat(K(t).lineHeight), t.style.lineHeight = l;
                        return p && (o /= 100), _ ? -o : o
                    },
                    et = V.calculateOffset = function(t, e, i) {
                        if ("absolute" !== J(t, "position", i)) return 0;
                        var r = "left" === e ? "Left" : "Top",
                            s = J(t, "margin" + r, i);
                        return t["offset" + r] - (tt(t, e, parseFloat(s), s.replace(w, "")) || 0)
                    },
                    it = function(t, e) {
                        var i, r, s, n = {};
                        if (e = e || K(t, null))
                            if (i = e.length)
                                for (; --i > -1;)(-1 === (s = e[i]).indexOf("-transform") || Ct === s) && (n[s.replace(R, A)] = e.getPropertyValue(s));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || Rt === i) && (n[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === n[i] && (n[i.replace(R, A)] = e[i]);
                        return W || (n.opacity = H(t)), r = Yt(t, e, !1), n.rotation = r.rotation, n.skewX = r.skewX, n.scaleX = r.scaleX, n.scaleY = r.scaleY, n.x = r.x, n.y = r.y, Mt && (n.z = r.z, n.rotationX = r.rotationX, n.rotationY = r.rotationY, n.scaleZ = r.scaleZ), n.filters && delete n.filters, n
                    },
                    rt = function(t, e, i, r, s) {
                        var n, a, o, l = {},
                            h = t.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || s && s[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(x, "") ? n : 0 : et(t, a), void 0 !== h[a] && (o = new vt(h, a, h[a], o)));
                        if (r)
                            for (a in r) "className" !== a && (l[a] = r[a]);
                        return { difs: l, firstMPT: o }
                    },
                    st = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                    nt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    at = function(t, e, i) {
                        if ("svg" === (t.nodeName + "").toLowerCase()) return (i || K(t))[e] || 0;
                        if (t.getCTM && Xt(t)) return t.getBBox()[e] || 0;
                        var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            s = st[e],
                            n = s.length;
                        for (i = i || K(t, null); --n > -1;) r -= parseFloat(J(t, "padding" + s[n], i, !0)) || 0, r -= parseFloat(J(t, "border" + s[n] + "Width", i, !0)) || 0;
                        return r
                    },
                    ot = function(t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        (null == t || "" === t) && (t = "0 0");
                        var i, r = t.split(" "),
                            s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : r[0],
                            n = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : r[1];
                        if (r.length > 3 && !e) { for (r = t.split(", ").join(",").split(","), t = [], i = 0; i < r.length; i++) t.push(ot(r[i])); return t.join(",") }
                        return null == n ? n = "center" === s ? "50%" : "0" : "center" === n && (n = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), t = s + " " + n + (r.length > 2 ? " " + r[2] : ""), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== n.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === n.charAt(1), e.ox = parseFloat(s.replace(x, "")), e.oy = parseFloat(n.replace(x, "")), e.v = t), e || t
                    },
                    lt = function(t, e) { return "function" == typeof t && (t = t(g, m)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0 },
                    ht = function(t, e) { "function" == typeof t && (t = t(g, m)); var i = "string" == typeof t && "=" === t.charAt(1); return "string" == typeof t && "v" === t.charAt(t.length - 2) && (t = (i ? t.substr(0, 2) : 0) + window["inner" + ("vh" === t.substr(-2) ? "Height" : "Width")] * (parseFloat(i ? t.substr(2) : t) / 100)), null == t ? e : i ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0 },
                    ut = function(t, e, i, r) { var s, n, a, o, l; return "function" == typeof t && (t = t(g, m)), null == t ? o = e : "number" == typeof t ? o = t : (s = 360, n = t.split("_"), a = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : N) - (l ? 0 : e), n.length && (r && (r[i] = e + a), -1 !== t.indexOf("short") && ((a %= s) !== a % (s / 2) && (a = 0 > a ? a + s : a - s)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * s) % s - (a / s | 0) * s : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * s) % s - (a / s | 0) * s)), o = e + a), 1e-6 > o && o > -1e-6 && (o = 0), o },
                    ct = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] },
                    ft = function(t, e, i) { return 255 * (1 > 6 * (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t) ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0 },
                    _t = a.parseColor = function(t, e) {
                        var i, r, s, n, a, o, l, h, u, c, f;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ct[t]) i = ct[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (r = t.charAt(1)) + r + (s = t.charAt(2)) + s + (n = t.charAt(3)) + n), i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = f = t.match(v), e) { if (-1 !== t.indexOf("=")) return t.match(y) } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, r = 2 * (l = Number(i[2]) / 100) - (s = .5 >= l ? l * (o + 1) : l + o - l * o), i.length > 3 && (i[3] = Number(i[3])), i[0] = ft(a + 1 / 3, r, s), i[1] = ft(a, r, s), i[2] = ft(a - 1 / 3, r, s);
                                else i = t.match(v) || ct.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            }
                        else i = ct.black;
                        return e && !f && (r = i[0] / 255, s = i[1] / 255, n = i[2] / 255, l = ((h = Math.max(r, s, n)) + (u = Math.min(r, s, n))) / 2, h === u ? a = o = 0 : (c = h - u, o = l > .5 ? c / (2 - h - u) : c / (h + u), a = h === r ? (s - n) / c + (n > s ? 6 : 0) : h === s ? (n - r) / c + 2 : (r - s) / c + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 * o + .5 | 0, i[2] = 100 * l + .5 | 0), i
                    },
                    pt = function(t, e) {
                        var i, r, s, n = t.match(dt) || [],
                            a = 0,
                            o = "";
                        if (!n.length) return t;
                        for (i = 0; i < n.length; i++) r = n[i], a += (s = t.substr(a, t.indexOf(r, a) - a)).length + r.length, 3 === (r = _t(r, e)).length && r.push(1), o += s + (e ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3] : "rgba(" + r.join(",")) + ")";
                        return o + t.substr(a)
                    },
                    dt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (h in ct) dt += "|" + h + "\\b";
                dt = new RegExp(dt + ")", "gi"), a.colorStringFilter = function(t) {
                    var e, i = t[0] + " " + t[1];
                    dt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = pt(t[0], e), t[1] = pt(t[1], e)), dt.lastIndex = 0
                }, e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
                var mt = function(t, e, i, r) {
                        if (null == t) return function(t) { return t };
                        var s, n = e ? (t.match(dt) || [""])[0] : "",
                            a = t.split(n).join("").match(T) || [],
                            o = t.substr(0, t.indexOf(a[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            h = -1 !== t.indexOf(" ") ? " " : ",",
                            u = a.length,
                            c = u > 0 ? a[0].replace(v, "") : "";
                        return u ? s = e ? function(t) {
                            var e, f, _, p;
                            if ("number" == typeof t) t += c;
                            else if (r && F.test(t)) { for (p = t.replace(F, "|").split("|"), _ = 0; _ < p.length; _++) p[_] = s(p[_]); return p.join(",") }
                            if (e = (t.match(dt) || [n])[0], _ = (f = t.split(e).join("").match(T) || []).length, u > _--)
                                for (; ++_ < u;) f[_] = i ? f[(_ - 1) / 2 | 0] : a[_];
                            return o + f.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, n, f;
                            if ("number" == typeof t) t += c;
                            else if (r && F.test(t)) { for (n = t.replace(F, "|").split("|"), f = 0; f < n.length; f++) n[f] = s(n[f]); return n.join(",") }
                            if (f = (e = t.match(T) || []).length, u > f--)
                                for (; ++f < u;) e[f] = i ? e[(f - 1) / 2 | 0] : a[f];
                            return o + e.join(h) + l
                        } : function(t) { return t }
                    },
                    gt = function(t) {
                        return t = t.split(","),
                            function(e, i, r, s, n, a, o) { var l, h = (i + "").split(" "); for (o = {}, l = 0; 4 > l; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0]; return s.parse(e, o, n, a) }
                    },
                    vt = (V._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, r, s, n, a = this.data, o = a.proxy, l = a.firstMPT; l;) e = o[l.v], l.r ? e = l.r(e) : 1e-6 > e && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next;
                        if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod.call(this._tween, o.rotation, this.t, this._tween) : o.rotation), 1 === t || 0 === t)
                            for (l = a.firstMPT, n = 1 === t ? "e" : "b"; l;) {
                                if ((i = l.t).type) {
                                    if (1 === i.type) {
                                        for (s = i.xs0 + i.s + i.xs1, r = 1; r < i.l; r++) s += i["xn" + r] + i["xs" + (r + 1)];
                                        i[n] = s
                                    }
                                } else i[n] = i.s + i.xs0;
                                l = l._next
                            }
                    }, function(t, e, i, r, s) { this.t = t, this.p = e, this.v = i, this.r = s, r && (r._prev = this, this._next = r) }),
                    yt = (V._parseToProxy = function(t, e, i, r, s, n) {
                        var a, o, l, h, u, c = r,
                            f = {},
                            _ = {},
                            p = i._transform,
                            d = I;
                        for (i._transform = null, I = e, r = u = i.parse(t, e, r, s), I = d, n && (i._transform = p, c && (c._prev = null, c._prev && (c._prev._next = null))); r && r !== c;) {
                            if (r.type <= 1 && (_[o = r.p] = r.s + r.c, f[o] = r.s, n || (h = new vt(r, "s", o, h, r.r), r.c = 0), 1 === r.type))
                                for (a = r.l; --a > 0;) l = "xn" + a, _[o = r.p + "_" + l] = r.data[l], f[o] = r[l], n || (h = new vt(r, l, o, h, r.rxp[l]));
                            r = r._next
                        }
                        return { proxy: f, end: _, firstMPT: h, pt: u }
                    }, V.CSSPropTween = function(t, e, r, s, a, o, l, h, u, c, f) { this.t = t, this.p = e, this.s = r, this.c = s, this.n = l || e, t instanceof yt || n.push(this.n), this.r = h ? "function" == typeof h ? h : Math.round : h, this.type = o || 0, u && (this.pr = u, i = !0), this.b = void 0 === c ? r : c, this.e = void 0 === f ? r + s : f, a && (this._next = a, a._prev = this) }),
                    Tt = function(t, e, i, r, s, n) { var a = new yt(t, e, i, r - i, s, -1, n); return a.b = i, a.e = a.xs0 = r, a },
                    xt = a.parseComplex = function(t, e, i, r, s, n, o, l, h, c) {
                        i = i || n || "", "function" == typeof r && (r = r(g, m)), o = new yt(t, e, 0, 0, o, c ? 2 : 1, null, !1, l, i, r), r += "", s && dt.test(r + i) && (r = [i, r], a.colorStringFilter(r), i = r[0], r = r[1]);
                        var f, _, p, d, T, x, w, b, P, S, O, k, R, C = i.split(", ").join(",").split(" "),
                            A = r.split(", ").join(",").split(" "),
                            M = C.length,
                            D = !1 !== u;
                        for ((-1 !== r.indexOf(",") || -1 !== i.indexOf(",")) && (-1 !== (r + i).indexOf("rgb") || -1 !== (r + i).indexOf("hsl") ? (C = C.join(" ").replace(F, ", ").split(" "), A = A.join(" ").replace(F, ", ").split(" ")) : (C = C.join(" ").split(",").join(", ").split(" "), A = A.join(" ").split(",").join(", ").split(" ")), M = C.length), M !== A.length && (M = (C = (n || "").split(" ")).length), o.plugin = h, o.setRatio = c, dt.lastIndex = 0, f = 0; M > f; f++)
                            if (d = C[f], T = A[f] + "", (b = parseFloat(d)) || 0 === b) o.appendXtra("", b, lt(T, b), T.replace(y, ""), !(!D || -1 === T.indexOf("px")) && Math.round, !0);
                            else if (s && dt.test(d)) k = ")" + ((k = T.indexOf(")") + 1) ? T.substr(k) : ""), R = -1 !== T.indexOf("hsl") && W, S = T, d = _t(d, R), T = _t(T, R), (P = d.length + T.length > 6) && !W && 0 === T[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(A[f]).join("transparent")) : (W || (P = !1), R ? o.appendXtra(S.substr(0, S.indexOf("hsl")) + (P ? "hsla(" : "hsl("), d[0], lt(T[0], d[0]), ",", !1, !0).appendXtra("", d[1], lt(T[1], d[1]), "%,", !1).appendXtra("", d[2], lt(T[2], d[2]), P ? "%," : "%" + k, !1) : o.appendXtra(S.substr(0, S.indexOf("rgb")) + (P ? "rgba(" : "rgb("), d[0], T[0] - d[0], ",", Math.round, !0).appendXtra("", d[1], T[1] - d[1], ",", Math.round).appendXtra("", d[2], T[2] - d[2], P ? "," : k, Math.round), P && (d = d.length < 4 ? 1 : d[3], o.appendXtra("", d, (T.length < 4 ? 1 : T[3]) - d, k, !1))), dt.lastIndex = 0;
                        else if (x = d.match(v)) {
                            if (!(w = T.match(y)) || w.length !== x.length) return o;
                            for (p = 0, _ = 0; _ < x.length; _++) O = x[_], S = d.indexOf(O, p), o.appendXtra(d.substr(p, S - p), Number(O), lt(w[_], O), "", !(!D || "px" !== d.substr(S + O.length, 2)) && Math.round, 0 === _), p = S + O.length;
                            o["xs" + o.l] += d.substr(p)
                        } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + T : T;
                        if (-1 !== r.indexOf("=") && o.data) {
                            for (k = o.xs0 + o.data.s, f = 1; f < o.l; f++) k += o["xs" + f] + o.data["xn" + f];
                            o.e = k + o["xs" + f]
                        }
                        return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                    },
                    wt = 9;
                for ((h = yt.prototype).l = h.pr = 0; --wt > 0;) h["xn" + wt] = 0, h["xs" + wt] = "";
                h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, r, s, n) {
                    var a = this,
                        o = a.l;
                    return a["xs" + o] += n && (o || a["xs" + o]) ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = r || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = s, a["xn" + o] = e, a.plugin || (a.xfirst = new yt(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, s, a.pr), a.xfirst.xs0 = 0), a) : (a.data = { s: e + i }, a.rxp = {}, a.s = e, a.c = i, a.r = s, a)) : (a["xs" + o] += e + (r || ""), a)
                };
                var bt = function(t, e) { e = e || {}, this.p = e.prefix && Q(t) || t, l[t] = l[this.p] = this, this.format = e.formatter || mt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0 },
                    Pt = V._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = { parser: i });
                        var r, s = t.split(","),
                            n = e.defaultValue;
                        for (i = i || [n], r = 0; r < s.length; r++) e.prefix = 0 === r && e.prefix, e.defaultValue = i[r] || n, new bt(s[r], e)
                    },
                    St = V._registerPluginProp = function(t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            Pt(t, { parser: function(t, i, r, s, n, a, h) { var u = o.com.greensock.plugins[e]; return u ? (u._cssRegister(), l[r].parse(t, i, r, s, n, a, h)) : (G("Error: " + e + " js file not loaded."), n) } })
                        }
                    };
                (h = bt.prototype).parseComplex = function(t, e, i, r, s, n) {
                    var a, o, l, h, u, c, f = this.keyword;
                    if (this.multi && (F.test(i) || F.test(e) ? (o = e.replace(F, "|").split("|"), l = i.replace(F, "|").split("|")) : f && (o = [e], l = [i])), l) {
                        for (h = l.length > o.length ? l.length : o.length, a = 0; h > a; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, f && ((u = e.indexOf(f)) !== (c = i.indexOf(f)) && (-1 === c ? o[a] = o[a].split(f).join("") : -1 === u && (o[a] += " " + f)));
                        e = o.join(", "), i = l.join(", ")
                    }
                    return xt(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, s, n)
                }, h.parse = function(t, e, i, r, n, a, o) { return this.parseComplex(t.style, this.format(J(t, this.p, s, !1, this.dflt)), this.format(e), n, a) }, a.registerSpecialProp = function(t, e, i) { Pt(t, { parser: function(t, r, s, n, a, o, l) { var h = new yt(t, s, 0, 0, a, 2, s, !1, i); return h.plugin = o, h.setRatio = e(t, r, n._tween, s), h }, priority: i }) }, a.useSVGTransformAttr = !0;
                var Ot, kt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Rt = Q("transform"),
                    Ct = $ + "transform",
                    At = Q("transformOrigin"),
                    Mt = null !== Q("perspective"),
                    Dt = V.Transform = function() { this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = !(!1 === a.defaultForce3D || !Mt) && (a.defaultForce3D || "auto") },
                    Et = _gsScope.SVGElement,
                    Ft = function(t, e, i) {
                        var r, s = B.createElementNS("http://www.w3.org/2000/svg", t),
                            n = /([a-z])([A-Z])/g;
                        for (r in i) s.setAttributeNS(null, r.replace(n, "$1-$2").toLowerCase(), i[r]);
                        return e.appendChild(s), s
                    },
                    zt = B.documentElement || {},
                    Lt = function() { var t, e, i, r = d || /Android/i.test(q) && !_gsScope.chrome; return B.createElementNS && !r && (t = Ft("svg", zt), i = (e = Ft("rect", t, { width: 100, height: 50, x: 100 })).getBoundingClientRect().width, e.style[At] = "50% 50%", e.style[Rt] = "scaleX(0.5)", r = i === e.getBoundingClientRect().width && !(_ && Mt), zt.removeChild(t)), r }(),
                    Nt = function(t, e, i, r, s, n) {
                        var o, l, h, u, c, f, _, p, d, m, g, v, y, T, x = t._gsTransform,
                            w = jt(t, !0);
                        x && (y = x.xOrigin, T = x.yOrigin), (!r || (o = r.split(" ")).length < 2) && (0 === (_ = t.getBBox()).x && 0 === _.y && _.width + _.height === 0 && (_ = { x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0, y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0, width: 0, height: 0 }), o = [(-1 !== (e = ot(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * _.width : parseFloat(e[0])) + _.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * _.height : parseFloat(e[1])) + _.y]), i.xOrigin = u = parseFloat(o[0]), i.yOrigin = c = parseFloat(o[1]), r && w !== Bt && (f = w[0], _ = w[1], p = w[2], d = w[3], m = w[4], g = w[5], (v = f * d - _ * p) && (l = u * (d / v) + c * (-p / v) + (p * g - d * m) / v, h = u * (-_ / v) + c * (f / v) - (f * g - _ * m) / v, u = i.xOrigin = o[0] = l, c = i.yOrigin = o[1] = h)), x && (n && (i.xOffset = x.xOffset, i.yOffset = x.yOffset, x = i), s || !1 !== s && !1 !== a.defaultSmoothOrigin ? (l = u - y, h = c - T, x.xOffset += l * w[0] + h * w[2] - l, x.yOffset += l * w[1] + h * w[3] - h) : x.xOffset = x.yOffset = 0), n || t.setAttribute("data-svg-origin", o.join(" "))
                    },
                    It = function(t) {
                        var e, i = j("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                            r = this.parentNode,
                            s = this.nextSibling,
                            n = this.style.cssText;
                        if (zt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try { e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = It } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                        return s ? r.insertBefore(this, s) : r.appendChild(this), zt.removeChild(i), this.style.cssText = n, e
                    },
                    Xt = function(t) { return !(!Et || !t.getCTM || t.parentNode && !t.ownerSVGElement || ! function(t) { try { return t.getBBox() } catch (e) { return It.call(t, !0) } }(t)) },
                    Bt = [1, 0, 0, 1, 0, 0],
                    jt = function(t, e) {
                        var i, r, s, n, a, o, l = t._gsTransform || new Dt,
                            h = t.style;
                        if (Rt ? r = J(t, Ct, null, !0) : t.currentStyle && (r = (r = t.currentStyle.filter.match(D)) && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, !Rt || !(o = !K(t) || "none" === K(t).display) && t.parentNode || (o && (n = h.display, h.display = "block"), t.parentNode || (a = 1, zt.appendChild(t)), i = !(r = J(t, Ct, null, !0)) || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, n ? h.display = n : o && Wt(h, "display"), a && zt.removeChild(t)), (l.svg || t.getCTM && Xt(t)) && (i && -1 !== (h[Rt] + "").indexOf("matrix") && (r = h[Rt], i = 0), s = t.getAttribute("transform"), i && s && (r = "matrix(" + (s = t.transform.baseVal.consolidate().matrix).a + "," + s.b + "," + s.c + "," + s.d + "," + s.e + "," + s.f + ")", i = 0)), i) return Bt;
                        for (s = (r || "").match(v) || [], wt = s.length; --wt > -1;) n = Number(s[wt]), s[wt] = (a = n - (n |= 0)) ? (1e5 * a + (0 > a ? -.5 : .5) | 0) / 1e5 + n : n;
                        return e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s
                    },
                    Yt = V.getTransform = function(t, i, r, s) {
                        if (t._gsTransform && r && !s) return t._gsTransform;
                        var n, o, l, h, u, c, f = r && t._gsTransform || new Dt,
                            _ = f.scaleX < 0,
                            p = 2e-5,
                            d = 1e5,
                            m = Mt && (parseFloat(J(t, At, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin) || 0,
                            g = parseFloat(a.defaultTransformPerspective) || 0;
                        if (f.svg = !(!t.getCTM || !Xt(t)), f.svg && (Nt(t, J(t, At, i, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), Ot = a.useSVGTransformAttr || Lt), (n = jt(t)) !== Bt) {
                            if (16 === n.length) {
                                var v, y, T, x, w, b = n[0],
                                    P = n[1],
                                    S = n[2],
                                    O = n[3],
                                    k = n[4],
                                    R = n[5],
                                    C = n[6],
                                    A = n[7],
                                    M = n[8],
                                    D = n[9],
                                    E = n[10],
                                    F = n[12],
                                    z = n[13],
                                    L = n[14],
                                    I = n[11],
                                    X = Math.atan2(C, E);
                                f.zOrigin && (F = M * (L = -f.zOrigin) - n[12], z = D * L - n[13], L = E * L + f.zOrigin - n[14]), f.rotationX = X * N, X && (v = k * (x = Math.cos(-X)) + M * (w = Math.sin(-X)), y = R * x + D * w, T = C * x + E * w, M = k * -w + M * x, D = R * -w + D * x, E = C * -w + E * x, I = A * -w + I * x, k = v, R = y, C = T), X = Math.atan2(-S, E), f.rotationY = X * N, X && (y = P * (x = Math.cos(-X)) - D * (w = Math.sin(-X)), T = S * x - E * w, D = P * w + D * x, E = S * w + E * x, I = O * w + I * x, b = v = b * x - M * w, P = y, S = T), X = Math.atan2(P, b), f.rotation = X * N, X && (v = b * (x = Math.cos(X)) + P * (w = Math.sin(X)), y = k * x + R * w, T = M * x + D * w, P = P * x - b * w, R = R * x - k * w, D = D * x - M * w, b = v, k = y, M = T), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY), X = Math.atan2(k, R), f.scaleX = (Math.sqrt(b * b + P * P + S * S) * d + .5 | 0) / d, f.scaleY = (Math.sqrt(R * R + C * C) * d + .5 | 0) / d, f.scaleZ = (Math.sqrt(M * M + D * D + E * E) * d + .5 | 0) / d, b /= f.scaleX, k /= f.scaleY, P /= f.scaleX, R /= f.scaleY, Math.abs(X) > p ? (f.skewX = X * N, k = 0, "simple" !== f.skewType && (f.scaleY *= 1 / Math.cos(X))) : f.skewX = 0, f.perspective = I ? 1 / (0 > I ? -I : I) : 0, f.x = F, f.y = z, f.z = L, f.svg && (f.x -= f.xOrigin - (f.xOrigin * b - f.yOrigin * k), f.y -= f.yOrigin - (f.yOrigin * P - f.xOrigin * R))
                            } else if (!Mt || s || !n.length || f.x !== n[4] || f.y !== n[5] || !f.rotationX && !f.rotationY) {
                                var B = n.length >= 6,
                                    j = B ? n[0] : 1,
                                    Y = n[1] || 0,
                                    U = n[2] || 0,
                                    V = B ? n[3] : 1;
                                f.x = n[4] || 0, f.y = n[5] || 0, l = Math.sqrt(j * j + Y * Y), h = Math.sqrt(V * V + U * U), u = j || Y ? Math.atan2(Y, j) * N : f.rotation || 0, c = U || V ? Math.atan2(U, V) * N + u : f.skewX || 0, f.scaleX = l, f.scaleY = h, f.rotation = u, f.skewX = c, Mt && (f.rotationX = f.rotationY = f.z = 0, f.perspective = g, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * j + f.yOrigin * U), f.y -= f.yOrigin - (f.xOrigin * Y + f.yOrigin * V))
                            }
                            for (o in Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (_ ? (f.scaleX *= -1, f.skewX += f.rotation <= 0 ? 180 : -180, f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1, f.skewX += f.skewX <= 0 ? 180 : -180)), f.zOrigin = m, f) f[o] < p && f[o] > -p && (f[o] = 0)
                        }
                        return r && (t._gsTransform = f, f.svg && (Ot && t.style[Rt] ? e.delayedCall(.001, function() { Wt(t.style, Rt) }) : !Ot && t.getAttribute("transform") && e.delayedCall(.001, function() { t.removeAttribute("transform") }))), f
                    },
                    Ut = function(t) {
                        var e, i, r = this.data,
                            s = -r.rotation * L,
                            n = s + r.skewX * L,
                            a = 1e5,
                            o = (Math.cos(s) * r.scaleX * a | 0) / a,
                            l = (Math.sin(s) * r.scaleX * a | 0) / a,
                            h = (Math.sin(n) * -r.scaleY * a | 0) / a,
                            u = (Math.cos(n) * r.scaleY * a | 0) / a,
                            c = this.t.style,
                            f = this.t.currentStyle;
                        if (f) {
                            i = l, l = -h, h = -i, e = f.filter, c.filter = "";
                            var _, p, m = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                v = "absolute" !== f.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + u,
                                T = r.x + m * r.xPercent / 100,
                                x = r.y + g * r.yPercent / 100;
                            if (null != r.ox && (T += (_ = (r.oxp ? m * r.ox * .01 : r.ox) - m / 2) - (_ * o + (p = (r.oyp ? g * r.oy * .01 : r.oy) - g / 2) * l), x += p - (_ * h + p * u)), v ? y += ", Dx=" + ((_ = m / 2) - (_ * o + (p = g / 2) * l) + T) + ", Dy=" + (p - (_ * h + p * u) + x) + ")" : y += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = e.replace(E, y) : c.filter = y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === u && (v && -1 === y.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")), !v) { var P, S, O, k = 8 > d ? 1 : -1; for (_ = r.ieOffsetX || 0, p = r.ieOffsetY || 0, r.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (0 > l ? -l : l) * g)) / 2 + T), r.ieOffsetY = Math.round((g - ((0 > u ? -u : u) * g + (0 > h ? -h : h) * m)) / 2 + x), wt = 0; 4 > wt; wt++) O = (i = -1 !== (P = f[S = nt[wt]]).indexOf("px") ? parseFloat(P) : tt(this.t, S, parseFloat(P), P.replace(w, "")) || 0) !== r[S] ? 2 > wt ? -r.ieOffsetX : -r.ieOffsetY : 2 > wt ? _ - r.ieOffsetX : p - r.ieOffsetY, c[S] = (r[S] = Math.round(i - O * (0 === wt || 2 === wt ? 1 : k))) + "px" }
                        }
                    },
                    Vt = V.set3DTransformRatio = V.setTransformRatio = function(t) {
                        var e, i, r, s, n, a, o, l, h, u, c, f, p, d, m, g, v, y, T, x, w, b, P, S = this.data,
                            O = this.t.style,
                            k = S.rotation,
                            R = S.rotationX,
                            C = S.rotationY,
                            A = S.scaleX,
                            M = S.scaleY,
                            D = S.scaleZ,
                            E = S.x,
                            F = S.y,
                            z = S.z,
                            N = S.svg,
                            I = S.perspective,
                            X = S.force3D,
                            B = S.skewY,
                            j = S.skewX;
                        if (B && (j += B, k += B), !((1 !== t && 0 !== t || "auto" !== X || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && X || z || I || C || R || 1 !== D) || Ot && N || !Mt) k || j || N ? (k *= L, b = j * L, P = 1e5, i = Math.cos(k) * A, n = Math.sin(k) * A, r = Math.sin(k - b) * -M, a = Math.cos(k - b) * M, b && "simple" === S.skewType && (e = Math.tan(b - B * L), r *= e = Math.sqrt(1 + e * e), a *= e, B && (e = Math.tan(B * L), i *= e = Math.sqrt(1 + e * e), n *= e)), N && (E += S.xOrigin - (S.xOrigin * i + S.yOrigin * r) + S.xOffset, F += S.yOrigin - (S.xOrigin * n + S.yOrigin * a) + S.yOffset, Ot && (S.xPercent || S.yPercent) && (m = this.t.getBBox(), E += .01 * S.xPercent * m.width, F += .01 * S.yPercent * m.height), (m = 1e-6) > E && E > -m && (E = 0), m > F && F > -m && (F = 0)), T = (i * P | 0) / P + "," + (n * P | 0) / P + "," + (r * P | 0) / P + "," + (a * P | 0) / P + "," + E + "," + F + ")", N && Ot ? this.t.setAttribute("transform", "matrix(" + T) : O[Rt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + T) : O[Rt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + M + "," + E + "," + F + ")";
                        else {
                            if (_ && ((m = 1e-4) > A && A > -m && (A = D = 2e-5), m > M && M > -m && (M = D = 2e-5), !I || S.z || S.rotationX || S.rotationY || (I = 0)), k || j) k *= L, g = i = Math.cos(k), v = n = Math.sin(k), j && (k -= j * L, g = Math.cos(k), v = Math.sin(k), "simple" === S.skewType && (e = Math.tan((j - B) * L), g *= e = Math.sqrt(1 + e * e), v *= e, S.skewY && (e = Math.tan(B * L), i *= e = Math.sqrt(1 + e * e), n *= e))), r = -v, a = g;
                            else {
                                if (!(C || R || 1 !== D || I || N)) return void(O[Rt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + E + "px," + F + "px," + z + "px)" + (1 !== A || 1 !== M ? " scale(" + A + "," + M + ")" : ""));
                                i = a = 1, r = n = 0
                            }
                            u = 1, s = o = l = h = c = f = 0, p = I ? -1 / I : 0, d = S.zOrigin, m = 1e-6, x = ",", w = "0", (k = C * L) && (g = Math.cos(k), l = -(v = Math.sin(k)), c = p * -v, s = i * v, o = n * v, u = g, p *= g, i *= g, n *= g), (k = R * L) && (e = r * (g = Math.cos(k)) + s * (v = Math.sin(k)), y = a * g + o * v, h = u * v, f = p * v, s = r * -v + s * g, o = a * -v + o * g, u *= g, p *= g, r = e, a = y), 1 !== D && (s *= D, o *= D, u *= D, p *= D), 1 !== M && (r *= M, a *= M, h *= M, f *= M), 1 !== A && (i *= A, n *= A, l *= A, c *= A), (d || N) && (d && (E += s * -d, F += o * -d, z += u * -d + d), N && (E += S.xOrigin - (S.xOrigin * i + S.yOrigin * r) + S.xOffset, F += S.yOrigin - (S.xOrigin * n + S.yOrigin * a) + S.yOffset), m > E && E > -m && (E = w), m > F && F > -m && (F = w), m > z && z > -m && (z = 0)), T = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", T += (m > i && i > -m ? w : i) + x + (m > n && n > -m ? w : n) + x + (m > l && l > -m ? w : l), T += x + (m > c && c > -m ? w : c) + x + (m > r && r > -m ? w : r) + x + (m > a && a > -m ? w : a), R || C || 1 !== D ? (T += x + (m > h && h > -m ? w : h) + x + (m > f && f > -m ? w : f) + x + (m > s && s > -m ? w : s), T += x + (m > o && o > -m ? w : o) + x + (m > u && u > -m ? w : u) + x + (m > p && p > -m ? w : p) + x) : T += ",0,0,0,0,1,0,", T += E + x + F + x + z + x + (I ? 1 + -z / I : 1) + ")", O[Rt] = T
                        }
                    };
                (h = Dt.prototype).x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, Pt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, r, n, o, l) {
                        if (r._lastParsedTransform === l) return n;
                        r._lastParsedTransform = l;
                        var h, u = l.scale && "function" == typeof l.scale ? l.scale : 0;
                        "function" == typeof l[i] && (h = l[i], l[i] = e), u && (l.scale = u(g, t));
                        var c, f, _, p, d, v, y, T, x, w = t._gsTransform,
                            b = t.style,
                            P = kt.length,
                            S = l,
                            O = {},
                            k = "transformOrigin",
                            R = Yt(t, s, !0, S.parseTransform),
                            C = S.transform && ("function" == typeof S.transform ? S.transform(g, m) : S.transform);
                        if (R.skewType = S.skewType || R.skewType || a.defaultSkewType, r._transform = R, "rotationZ" in S && (S.rotation = S.rotationZ), C && "string" == typeof C && Rt)(f = Y.style)[Rt] = C, f.display = "block", f.position = "absolute", -1 !== C.indexOf("%") && (f.width = J(t, "width"), f.height = J(t, "height")), B.body.appendChild(Y), c = Yt(Y, null, !1), "simple" === R.skewType && (c.scaleY *= Math.cos(c.skewX * L)), R.svg && (v = R.xOrigin, y = R.yOrigin, c.x -= R.xOffset, c.y -= R.yOffset, (S.transformOrigin || S.svgOrigin) && (C = {}, Nt(t, ot(S.transformOrigin), C, S.svgOrigin, S.smoothOrigin, !0), v = C.xOrigin, y = C.yOrigin, c.x -= C.xOffset - R.xOffset, c.y -= C.yOffset - R.yOffset), (v || y) && (T = jt(Y, !0), c.x -= v - (v * T[0] + y * T[2]), c.y -= y - (v * T[1] + y * T[3]))), B.body.removeChild(Y), c.perspective || (c.perspective = R.perspective), null != S.xPercent && (c.xPercent = ht(S.xPercent, R.xPercent)), null != S.yPercent && (c.yPercent = ht(S.yPercent, R.yPercent));
                        else if ("object" == typeof S) {
                            if (c = { scaleX: ht(null != S.scaleX ? S.scaleX : S.scale, R.scaleX), scaleY: ht(null != S.scaleY ? S.scaleY : S.scale, R.scaleY), scaleZ: ht(S.scaleZ, R.scaleZ), x: ht(S.x, R.x), y: ht(S.y, R.y), z: ht(S.z, R.z), xPercent: ht(S.xPercent, R.xPercent), yPercent: ht(S.yPercent, R.yPercent), perspective: ht(S.transformPerspective, R.perspective) }, null != (d = S.directionalRotation))
                                if ("object" == typeof d)
                                    for (f in d) S[f] = d[f];
                                else S.rotation = d;
                                "string" == typeof S.x && -1 !== S.x.indexOf("%") && (c.x = 0, c.xPercent = ht(S.x, R.xPercent)), "string" == typeof S.y && -1 !== S.y.indexOf("%") && (c.y = 0, c.yPercent = ht(S.y, R.yPercent)), c.rotation = ut("rotation" in S ? S.rotation : "shortRotation" in S ? S.shortRotation + "_short" : R.rotation, R.rotation, "rotation", O), Mt && (c.rotationX = ut("rotationX" in S ? S.rotationX : "shortRotationX" in S ? S.shortRotationX + "_short" : R.rotationX || 0, R.rotationX, "rotationX", O), c.rotationY = ut("rotationY" in S ? S.rotationY : "shortRotationY" in S ? S.shortRotationY + "_short" : R.rotationY || 0, R.rotationY, "rotationY", O)), c.skewX = ut(S.skewX, R.skewX), c.skewY = ut(S.skewY, R.skewY)
                        }
                        for (Mt && null != S.force3D && (R.force3D = S.force3D, p = !0), (_ = R.force3D || R.z || R.rotationX || R.rotationY || c.z || c.rotationX || c.rotationY || c.perspective) || null == S.scale || (c.scaleZ = 1); --P > -1;)((C = c[x = kt[P]] - R[x]) > 1e-6 || -1e-6 > C || null != S[x] || null != I[x]) && (p = !0, n = new yt(R, x, R[x], C, n), x in O && (n.e = O[x]), n.xs0 = 0, n.plugin = o, r._overwriteProps.push(n.n));
                        return C = S.transformOrigin, R.svg && (C || S.svgOrigin) && (v = R.xOffset, y = R.yOffset, Nt(t, ot(C), c, S.svgOrigin, S.smoothOrigin), n = Tt(R, "xOrigin", (w ? R : c).xOrigin, c.xOrigin, n, k), n = Tt(R, "yOrigin", (w ? R : c).yOrigin, c.yOrigin, n, k), (v !== R.xOffset || y !== R.yOffset) && (n = Tt(R, "xOffset", w ? v : R.xOffset, R.xOffset, n, k), n = Tt(R, "yOffset", w ? y : R.yOffset, R.yOffset, n, k)), C = "0px 0px"), (C || Mt && _ && R.zOrigin) && (Rt ? (p = !0, x = At, C = (C || J(t, x, s, !1, "50% 50%")) + "", (n = new yt(b, x, 0, 0, n, -1, k)).b = b[x], n.plugin = o, Mt ? (f = R.zOrigin, C = C.split(" "), R.zOrigin = (C.length > 2 && (0 === f || "0px" !== C[2]) ? parseFloat(C[2]) : f) || 0, n.xs0 = n.e = C[0] + " " + (C[1] || "50%") + " 0px", (n = new yt(R, "zOrigin", 0, 0, n, -1, n.n)).b = f, n.xs0 = n.e = R.zOrigin) : n.xs0 = n.e = C) : ot(C + "", R)), p && (r._transformType = R.svg && Ot || !_ && 3 !== this._transformType ? 2 : 3), h && (l[i] = h), u && (l.scale = u), n
                    },
                    prefix: !0
                }), Pt("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }), Pt("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, n, a, o) {
                        e = this.format(e);
                        var l, h, u, c, f, _, p, d, m, g, v, y, T, x, w, b, P = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            S = t.style;
                        for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < P.length; h++) this.p.indexOf("border") && (P[h] = Q(P[h])), -1 !== (f = c = J(t, P[h], s, !1, "0px")).indexOf(" ") && (f = (c = f.split(" "))[0], c = c[1]), _ = u = l[h], p = parseFloat(f), y = f.substr((p + "").length), (T = "=" === _.charAt(1)) ? (d = parseInt(_.charAt(0) + "1", 10), _ = _.substr(2), d *= parseFloat(_), v = _.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(_), v = _.substr((d + "").length)), "" === v && (v = r[i] || y), v !== y && (x = tt(t, "borderLeft", p, y), w = tt(t, "borderTop", p, y), "%" === v ? (f = x / m * 100 + "%", c = w / g * 100 + "%") : "em" === v ? (f = x / (b = tt(t, "borderLeft", 1, "em")) + "em", c = w / b + "em") : (f = x + "px", c = w + "px"), T && (_ = parseFloat(f) + d + v, u = parseFloat(c) + d + v)), a = xt(S, P[h], f + " " + c, _ + " " + u, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: mt("0px 0px 0px 0px", !1, !0)
                }), Pt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", { defaultValue: "0px", parser: function(t, e, i, r, n, a) { return xt(t.style, i, this.format(J(t, i, s, !1, "0px 0px")), this.format(e), !1, "0px", n) }, prefix: !0, formatter: mt("0px 0px", !1, !0) }), Pt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, r, n, a) {
                        var o, l, h, u, c, f, _ = "background-position",
                            p = s || K(t, null),
                            m = this.format((p ? d ? p.getPropertyValue(_ + "-x") + " " + p.getPropertyValue(_ + "-y") : p.getPropertyValue(_) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && ((f = J(t, "backgroundImage").replace(C, "")) && "none" !== f)) {
                            for (o = m.split(" "), l = g.split(" "), U.setAttribute("src", f), h = 2; --h > -1;)(u = -1 !== (m = o[h]).indexOf("%")) !== (-1 !== l[h].indexOf("%")) && (c = 0 === h ? t.offsetWidth - U.width : t.offsetHeight - U.height, o[h] = u ? parseFloat(m) / 100 * c + "px" : parseFloat(m) / c * 100 + "%");
                            m = o.join(" ")
                        }
                        return this.parseComplex(t.style, m, g, n, a)
                    },
                    formatter: ot
                }), Pt("backgroundSize", { defaultValue: "0 0", formatter: function(t) { return "co" === (t += "").substr(0, 2) ? t : ot(-1 === t.indexOf(" ") ? t + " " + t : t) } }), Pt("perspective", { defaultValue: "0px", prefix: !0 }), Pt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }), Pt("transformStyle", { prefix: !0 }), Pt("backfaceVisibility", { prefix: !0 }), Pt("userSelect", { prefix: !0 }), Pt("margin", { parser: gt("marginTop,marginRight,marginBottom,marginLeft") }), Pt("padding", { parser: gt("paddingTop,paddingRight,paddingBottom,paddingLeft") }), Pt("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function(t, e, i, r, n, a) { var o, l, h; return 9 > d ? (l = t.currentStyle, h = 8 > d ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(J(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a) } }), Pt("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }), Pt("autoRound,strictUnits", { parser: function(t, e, i, r, s) { return s } }), Pt("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, r, n, a) {
                        var o = J(t, "borderTopWidth", s, !1, "0px"),
                            l = this.format(e).split(" "),
                            h = l[0].replace(w, "");
                        return "px" !== h && (o = parseFloat(o) / tt(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(o + " " + J(t, "borderTopStyle", s, !1, "solid") + " " + J(t, "borderTopColor", s, !1, "#000")), l.join(" "), n, a)
                    },
                    color: !0,
                    formatter: function(t) { var e = t.split(" "); return e[0] + " " + (e[1] || "solid") + " " + (t.match(dt) || ["#000"])[0] }
                }), Pt("borderWidth", { parser: gt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }), Pt("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, r, s, n) {
                        var a = t.style,
                            o = "cssFloat" in a ? "cssFloat" : "styleFloat";
                        return new yt(a, o, 0, 0, s, -1, i, !1, 0, a[o], e)
                    }
                });
                var qt = function(t) {
                    var e, i = this.t,
                        r = i.filter || J(this.data, "filter") || "",
                        s = this.s + this.c * t | 0;
                    100 === s && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"), e = !J(this.data, "filter")) : (i.filter = r.replace(S, ""), e = !0)), e || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + s + ")"), -1 === r.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = r + " alpha(opacity=" + s + ")") : i.filter = r.replace(b, "opacity=" + s))
                };
                Pt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, r, n, a) {
                        var o = parseFloat(J(t, "opacity", s, !1, "1")),
                            l = t.style,
                            h = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === J(t, "visibility", s) && 0 !== e && (o = 0), W ? n = new yt(l, "opacity", o, e - o, n) : ((n = new yt(l, "opacity", 100 * o, 100 * (e - o), n)).xn1 = h ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = qt), h && ((n = new yt(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", r._overwriteProps.push(n.n), r._overwriteProps.push(i)), n
                    }
                });
                var Wt = function(t, e) { e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e)) },
                    Ht = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Wt(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                Pt("className", {
                    parser: function(t, e, r, n, a, o, l) {
                        var h, u, c, f, _, p = t.getAttribute("class") || "",
                            d = t.style.cssText;
                        if ((a = n._classNamePT = new yt(t, r, 0, 0, a, 2)).setRatio = Ht, a.pr = -11, i = !0, a.b = p, u = it(t, s), c = t._gsClassPT) {
                            for (f = {}, _ = c.data; _;) f[_.p] = 1, _ = _._next;
                            c.setRatio(1)
                        }
                        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : p.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), h = rt(t, u, it(t), l, f), t.setAttribute("class", p), a.data = h.firstMPT, t.style.cssText = d, a.xfirst = n.parse(t, h.difs, a, o)
                    }
                });
                var Gt = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, r, s, n, a = this.t.style,
                            o = l.transform.parse;
                        if ("all" === this.e) a.cssText = "", s = !0;
                        else
                            for (r = (e = this.e.split(" ").join("").split(",")).length; --r > -1;) i = e[r], l[i] && (l[i].parse === o ? s = !0 : i = "transformOrigin" === i ? At : l[i].p), Wt(a, i);
                        s && (Wt(a, Rt), (n = this.t._gsTransform) && (n.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (Pt("clearProps", { parser: function(t, e, r, s, n) { return (n = new yt(t, r, 0, 0, n, 2)).setRatio = Gt, n.e = e, n.pr = -10, n.data = s._tween, i = !0, n } }), h = "bezier,throwProps,physicsProps,physics2D".split(","), wt = h.length; wt--;) St(h[wt]);
                (h = a.prototype)._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(t, e, o, h) {
                    if (!t.nodeType) return !1;
                    this._target = m = t, this._tween = o, this._vars = e, g = h, u = e.autoRound, i = !1, r = e.suffixMap || a.suffixMap, s = K(t, ""), n = this._overwriteProps;
                    var _, d, v, y, T, x, w, b, S, O = t.style;
                    if (c && "" === O.zIndex && (("auto" === (_ = J(t, "zIndex", s)) || "" === _) && this._addLazySet(O, "zIndex", 0)), "string" == typeof e && (y = O.cssText, _ = it(t, s), O.cssText = y + ";" + e, _ = rt(t, _, it(t)).difs, !W && P.test(e) && (_.opacity = parseFloat(RegExp.$1)), e = _, O.cssText = y), e.className ? this._firstPT = d = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = d = this.parse(t, e, null), this._transformType) {
                        for (S = 3 === this._transformType, Rt ? f && (c = !0, "" === O.zIndex && (("auto" === (w = J(t, "zIndex", s)) || "" === w) && this._addLazySet(O, "zIndex", 0)), p && this._addLazySet(O, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (S ? "visible" : "hidden"))) : O.zoom = 1, v = d; v && v._next;) v = v._next;
                        b = new yt(t, "transform", 0, 0, null, 2), this._linkCSSP(b, null, v), b.setRatio = Rt ? Vt : Ut, b.data = this._transform || Yt(t, s, !0), b.tween = o, b.pr = -1, n.pop()
                    }
                    if (i) {
                        for (; d;) {
                            for (x = d._next, v = y; v && v.pr > d.pr;) v = v._next;
                            (d._prev = v ? v._prev : T) ? d._prev._next = d: y = d, (d._next = v) ? v._prev = d : T = d, d = x
                        }
                        this._firstPT = y
                    }
                    return !0
                }, h.parse = function(t, e, i, n) {
                    var a, o, h, c, f, _, p, d, v, y, T = t.style;
                    for (a in e) {
                        if ("function" == typeof(_ = e[a]) && (_ = _(g, m)), o = l[a]) i = o.parse(t, _, a, this, i, n, e);
                        else {
                            if ("--" === a.substr(0, 2)) { this._tween._propLookup[a] = this._addTween.call(this._tween, t.style, "setProperty", K(t).getPropertyValue(a) + "", _ + "", a, !1, a); continue }
                            f = J(t, a, s) + "", v = "string" == typeof _, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || v && O.test(_) ? (v || (_ = ((_ = _t(_)).length > 3 ? "rgba(" : "rgb(") + _.join(",") + ")"), i = xt(T, a, f, _, !0, "transparent", i, 0, n)) : v && z.test(_) ? i = xt(T, a, f, _, !0, null, i, 0, n) : (p = (h = parseFloat(f)) || 0 === h ? f.substr((h + "").length) : "", ("" === f || "auto" === f) && ("width" === a || "height" === a ? (h = at(t, a, s), p = "px") : "left" === a || "top" === a ? (h = et(t, a, s), p = "px") : (h = "opacity" !== a ? 0 : 1, p = "")), (y = v && "=" === _.charAt(1)) ? (c = parseInt(_.charAt(0) + "1", 10), _ = _.substr(2), c *= parseFloat(_), d = _.replace(w, "")) : (c = parseFloat(_), d = v ? _.replace(w, "") : ""), "" === d && (d = a in r ? r[a] : p), _ = c || 0 === c ? (y ? c + h : c) + d : e[a], p !== d && ("" !== d || "lineHeight" === a) && (c || 0 === c) && h && (h = tt(t, a, h, p), "%" === d ? (h /= tt(t, a, 100, "%") / 100, !0 !== e.strictUnits && (f = h + "%")) : "em" === d || "rem" === d || "vw" === d || "vh" === d ? h /= tt(t, a, 1, d) : "px" !== d && (c = tt(t, a, c, d), d = "px"), y && (c || 0 === c) && (_ = c + h + d)), y && (c += h), !h && 0 !== h || !c && 0 !== c ? void 0 !== T[a] && (_ || _ + "" != "NaN" && null != _) ? (i = new yt(T, a, c || h || 0, 0, i, -1, a, !1, 0, f, _)).xs0 = "none" !== _ || "display" !== a && -1 === a.indexOf("Style") ? _ : f : G("invalid " + a + " tween value: " + e[a]) : (i = new yt(T, a, h, c - h, i, 0, a, !1 !== u && ("px" === d || "zIndex" === a), 0, f, _)).xs0 = d)
                        }
                        n && i && !i.plugin && (i.plugin = n)
                    }
                    return i
                }, h.setRatio = function(t) {
                    var e, i, r, s = this._firstPT;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                            for (; s;) {
                                if (e = s.c * t + s.s, s.r ? e = s.r(e) : 1e-6 > e && e > -1e-6 && (e = 0), s.type)
                                    if (1 === s.type)
                                        if (2 === (r = s.l)) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                                        else if (3 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                                else if (4 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                                else if (5 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                                else {
                                    for (i = s.xs0 + e + s.xs1, r = 1; r < s.l; r++) i += s["xn" + r] + s["xs" + (r + 1)];
                                    s.t[s.p] = i
                                } else -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                                else s.t[s.p] = e + s.xs0;
                                s = s._next
                            } else
                                for (; s;) 2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t), s = s._next;
                        else
                            for (; s;) {
                                if (2 !== s.type)
                                    if (s.r && -1 !== s.type)
                                        if (e = s.r(s.s + s.c), s.type) {
                                            if (1 === s.type) {
                                                for (r = s.l, i = s.xs0 + e + s.xs1, r = 1; r < s.l; r++) i += s["xn" + r] + s["xs" + (r + 1)];
                                                s.t[s.p] = i
                                            }
                                        } else s.t[s.p] = e + s.xs0;
                                else s.t[s.p] = s.e;
                                else s.setRatio(t);
                                s = s._next
                            }
                }, h._enableTransforms = function(t) { this._transform = this._transform || Yt(this._target, s, !0), this._transformType = this._transform.svg && Ot || !t && 3 !== this._transformType ? 2 : 3 };
                var $t = function(t) { this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0) };
                h._addLazySet = function(t, e, i) {
                    var r = this._firstPT = new yt(t, e, 0, 0, this._firstPT, 2);
                    r.e = i, r.setRatio = $t, r.data = this
                }, h._linkCSSP = function(t, e, i, r) { return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, r = !0), i ? i._next = t : r || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t }, h._mod = function(t) { for (var e = this._firstPT; e;) "function" == typeof t[e.p] && (e.r = t[e.p]), e = e._next }, h._kill = function(e) {
                    var i, r, s, n = e;
                    if (e.autoAlpha || e.alpha) {
                        for (r in n = {}, e) n[r] = e[r];
                        n.opacity = 1, n.autoAlpha && (n.visibility = 1)
                    }
                    for (e.className && (i = this._classNamePT) && ((s = i.xfirst) && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== r && i.plugin._kill && (i.plugin._kill(e), r = i.plugin), i = i._next;
                    return t.prototype._kill.call(this, n)
                };
                var Zt = function(t, e, i) {
                    var r, s, n, a;
                    if (t.slice)
                        for (s = t.length; --s > -1;) Zt(t[s], e, i);
                    else
                        for (s = (r = t.childNodes).length; --s > -1;) a = (n = r[s]).type, n.style && (e.push(it(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Zt(n, e, i)
                };
                return a.cascadeTo = function(t, i, r) {
                    var s, n, a, o, l = e.to(t, i, r),
                        h = [l],
                        u = [],
                        c = [],
                        f = [],
                        _ = e._internals.reservedProps;
                    for (t = l._targets || l.target, Zt(t, u, f), l.render(i, !0, !0), Zt(t, c), l.render(0, !0, !0), l._enabled(!0), s = f.length; --s > -1;)
                        if ((n = rt(f[s], u[s], c[s])).firstMPT) {
                            for (a in n = n.difs, r) _[a] && (n[a] = r[a]);
                            for (a in o = {}, n) o[a] = u[s][a];
                            h.push(e.fromTo(f[s], i, o, n))
                        }
                    return h
                }, t.activate([a]), a
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({ propName: "roundProps", version: "1.7.0", priority: -1, API: 2, init: function(t, e, i) { return this._tween = i, !0 } }),
                    e = function(t) { var e = 1 > t ? Math.pow(10, (t + "").length - 2) : 1; return function(i) { return (Math.round(i / t) * t * e | 0) / e } },
                    i = function(t, e) { for (; t;) t.f || t.blob || (t.m = e || Math.round), t = t._next },
                    r = t.prototype;
                r._onInitAllProps = function() {
                    var t, r, s, n, a = this._tween,
                        o = a.vars.roundProps,
                        l = {},
                        h = a._propLookup.roundProps;
                    if ("object" != typeof o || o.push)
                        for ("string" == typeof o && (o = o.split(",")), s = o.length; --s > -1;) l[o[s]] = Math.round;
                    else
                        for (n in o) l[n] = e(o[n]);
                    for (n in l)
                        for (t = a._firstPT; t;) r = t._next, t.pg ? t.t._mod(l) : t.n === n && (2 === t.f && t.t ? i(t.t._firstPT, l[n]) : (this._add(t.t, n, t.s, t.c, l[n]), r && (r._prev = t._prev), t._prev ? t._prev._next = r : a._firstPT === t && (a._firstPT = r), t._next = t._prev = null, a._propLookup[n] = h)), t = r;
                    return !1
                }, r._add = function(t, e, i, r, s) { this._addTween(t, e, i, i + r, e, s || Math.round), this._overwriteProps.push(e) }
            }(), _gsScope._gsDefine.plugin({ propName: "attr", API: 2, version: "0.6.1", init: function(t, e, i, r) { var s, n; if ("function" != typeof t.setAttribute) return !1; for (s in e) "function" == typeof(n = e[s]) && (n = n(r, t)), this._addTween(t, "setAttribute", t.getAttribute(s) + "", n + "", s, !1, s), this._overwriteProps.push(s); return !0 } }), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.1",
                API: 2,
                init: function(t, e, i, r) { "object" != typeof e && (e = { rotation: e }), this.finals = {}; var s, n, a, o, l, h, u = !0 === e.useRadians ? 2 * Math.PI : 360; for (s in e) "useRadians" !== s && ("function" == typeof(o = e[s]) && (o = o(r, t)), n = (h = (o + "").split("_"))[0], a = parseFloat("function" != typeof t[s] ? t[s] : t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]()), l = (o = this.finals[s] = "string" == typeof n && "=" === n.charAt(1) ? a + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0) - a, h.length && (-1 !== (n = h.join("_")).indexOf("short") && ((l %= u) !== l % (u / 2) && (l = 0 > l ? l + u : l - u)), -1 !== n.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * u) % u - (l / u | 0) * u : -1 !== n.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * u) % u - (l / u | 0) * u)), (l > 1e-6 || -1e-6 > l) && (this._addTween(t, s, a, a + l, s), this._overwriteProps.push(s))); return !0 },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, r, s, n = _gsScope.GreenSockGlobals || _gsScope,
                    a = n.com.greensock,
                    o = 2 * Math.PI,
                    l = Math.PI / 2,
                    h = a._class,
                    u = function(e, i) {
                        var r = h("easing." + e, function() {}, !0),
                            s = r.prototype = new t;
                        return s.constructor = r, s.getRatio = i, r
                    },
                    c = t.register || function() {},
                    f = function(t, e, i, r, s) { var n = h("easing." + t, { easeOut: new e, easeIn: new i, easeInOut: new r }, !0); return c(n, t), n },
                    _ = function(t, e, i) { this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t) },
                    p = function(e, i) {
                        var r = h("easing." + e, function(t) { this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1 }, !0),
                            s = r.prototype = new t;
                        return s.constructor = r, s.getRatio = i, s.config = function(t) { return new r(t) }, r
                    },
                    d = f("Back", p("BackOut", function(t) { return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1 }), p("BackIn", function(t) { return t * t * ((this._p1 + 1) * t - this._p1) }), p("BackInOut", function(t) { return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2) })),
                    m = h("easing.SlowMo", function(t, e, i) { e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i }, !0),
                    g = m.prototype = new t;
                return g.constructor = m, g.getRatio = function(t) { var e = t + (.5 - t) * this._p; return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e }, m.ease = new m(.7, .7), g.config = m.config = function(t, e, i) { return new m(t, e, i) }, (g = (e = h("easing.SteppedEase", function(t, e) { t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0 }, !0)).prototype = new t).constructor = e, g.getRatio = function(t) { return 0 > t ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1 }, g.config = e.config = function(t, i) { return new e(t, i) }, (g = (i = h("easing.ExpoScaleEase", function(t, e, i) { this._p1 = Math.log(e / t), this._p2 = e - t, this._p3 = t, this._ease = i }, !0)).prototype = new t).constructor = i, g.getRatio = function(t) { return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2 }, g.config = i.config = function(t, e, r) { return new i(t, e, r) }, (g = (r = h("easing.RoughEase", function(e) {
                    for (var i, r, s, n, a, o, l = (e = e || {}).taper || "none", h = [], u = 0, c = 0 | (e.points || 20), f = c, p = !1 !== e.randomize, d = !0 === e.clamp, m = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = p ? Math.random() : 1 / c * f, r = m ? m.getRatio(i) : i, "none" === l ? s = g : "out" === l ? s = (n = 1 - i) * n * g : "in" === l ? s = i * i * g : .5 > i ? s = (n = 2 * i) * n * .5 * g : s = (n = 2 * (1 - i)) * n * .5 * g, p ? r += Math.random() * s - .5 * s : f % 2 ? r += .5 * s : r -= .5 * s, d && (r > 1 ? r = 1 : 0 > r && (r = 0)), h[u++] = { x: i, y: r };
                    for (h.sort(function(t, e) { return t.x - e.x }), o = new _(1, 1, null), f = c; --f > -1;) a = h[f], o = new _(a.x, a.y, o);
                    this._prev = new _(0, 0, 0 !== o.t ? o : o.next)
                }, !0)).prototype = new t).constructor = r, g.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, g.config = function(t) { return new r(t) }, r.ease = new r, f("Bounce", u("BounceOut", function(t) { return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }), u("BounceIn", function(t) { return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375) }), u("BounceInOut", function(t) { var e = .5 > t; return t = 1 / 2.75 > (t = e ? 1 - 2 * t : 2 * t - 1) ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5 })), f("Circ", u("CircOut", function(t) { return Math.sqrt(1 - (t -= 1) * t) }), u("CircIn", function(t) { return -(Math.sqrt(1 - t * t) - 1) }), u("CircInOut", function(t) { return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) })), f("Elastic", (s = function(e, i, r) {
                    var s = h("easing." + e, function(t, e) { this._p1 = t >= 1 ? t : 1, this._p2 = (e || r) / (1 > t ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2 }, !0),
                        n = s.prototype = new t;
                    return n.constructor = s, n.getRatio = i, n.config = function(t, e) { return new s(t, e) }, s
                })("ElasticOut", function(t) { return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1 }, .3), s("ElasticIn", function(t) { return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) }, .3), s("ElasticInOut", function(t) { return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1 }, .45)), f("Expo", u("ExpoOut", function(t) { return 1 - Math.pow(2, -10 * t) }), u("ExpoIn", function(t) { return Math.pow(2, 10 * (t - 1)) - .001 }), u("ExpoInOut", function(t) { return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1))) })), f("Sine", u("SineOut", function(t) { return Math.sin(t * l) }), u("SineIn", function(t) { return 1 - Math.cos(t * l) }), u("SineInOut", function(t) { return -.5 * (Math.cos(Math.PI * t) - 1) })), h("easing.EaseLookup", { find: function(e) { return t.map[e] } }, !0), c(n.SlowMo, "SlowMo", "ease,"), c(r, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), d
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = {},
            r = t.document,
            s = t.GreenSockGlobals = t.GreenSockGlobals || t,
            n = s[e];
        if (n) return "undefined" != typeof module && module.exports && (module.exports = n), n;
        var a, o, l, h, u, c = function(t) {
                var e, i = t.split("."),
                    r = s;
                for (e = 0; e < i.length; e++) r[i[e]] = r = r[i[e]] || {};
                return r
            },
            f = c("com.greensock"),
            _ = 1e-10,
            p = function(t) {
                var e, i = [],
                    r = t.length;
                for (e = 0; e !== r; i.push(t[e++]));
                return i
            },
            d = function() {},
            m = function() {
                var t = Object.prototype.toString,
                    e = t.call([]);
                return function(i) { return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e) }
            }(),
            g = {},
            v = function(r, n, a, o) {
                this.sc = g[r] ? g[r].sc : [], g[r] = this, this.gsClass = null, this.func = a;
                var l = [];
                this.check = function(h) {
                    for (var u, f, _, p, d = n.length, m = d; --d > -1;)(u = g[n[d]] || new v(n[d], [])).gsClass ? (l[d] = u.gsClass, m--) : h && u.sc.push(this);
                    if (0 === m && a) {
                        if (_ = (f = ("com.greensock." + r).split(".")).pop(), p = c(f.join("."))[_] = this.gsClass = a.apply(a, l), o)
                            if (s[_] = i[_] = p, "undefined" != typeof module && module.exports)
                                if (r === e)
                                    for (d in module.exports = i[e] = p, i) p[d] = i[d];
                                else i[e] && (i[e][_] = p);
                        else "function" == typeof define && define.amd && define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function() { return p });
                        for (d = 0; d < this.sc.length; d++) this.sc[d].check()
                    }
                }, this.check(!0)
            },
            y = t._gsDefine = function(t, e, i, r) { return new v(t, e, i, r) },
            T = f._class = function(t, e, i) { return e = e || function() {}, y(t, [], function() { return e }, i), e };
        y.globals = s;
        var x = [0, 0, 1, 1],
            w = T("easing.Ease", function(t, e, i, r) { this._func = t, this._type = i || 0, this._power = r || 0, this._params = e ? x.concat(e) : x }, !0),
            b = w.map = {},
            P = w.register = function(t, e, i, r) {
                for (var s, n, a, o, l = e.split(","), h = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                    for (n = l[h], s = r ? T("easing." + n, null, !0) : f.easing[n] || {}, a = u.length; --a > -1;) o = u[a], b[n + "." + o] = b[o + n] = s[o] = t.getRatio ? t : t[o] || new t
            };
        for ((l = w.prototype)._calcEnd = !1, l.getRatio = function(t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    r = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                return 1 === i ? r *= r : 2 === i ? r *= r * r : 3 === i ? r *= r * r * r : 4 === i && (r *= r * r * r * r), 1 === e ? 1 - r : 2 === e ? r : .5 > t ? r / 2 : 1 - r / 2
            }, o = (a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --o > -1;) l = a[o] + ",Power" + o, P(new w(null, null, 1, o), l, "easeOut", !0), P(new w(null, null, 2, o), l, "easeIn" + (0 === o ? ",easeNone" : "")), P(new w(null, null, 3, o), l, "easeInOut");
        b.linear = f.easing.Linear.easeIn, b.swing = f.easing.Quad.easeInOut;
        var S = T("events.EventDispatcher", function(t) { this._listeners = {}, this._eventTarget = t || this });
        (l = S.prototype).addEventListener = function(t, e, i, r, s) {
            s = s || 0;
            var n, a, o = this._listeners[t],
                l = 0;
            for (this !== h || u || h.wake(), null == o && (this._listeners[t] = o = []), a = o.length; --a > -1;)(n = o[a]).c === e && n.s === i ? o.splice(a, 1) : 0 === l && n.pr < s && (l = a + 1);
            o.splice(l, 0, { c: e, s: i, up: r, pr: s })
        }, l.removeEventListener = function(t, e) {
            var i, r = this._listeners[t];
            if (r)
                for (i = r.length; --i > -1;)
                    if (r[i].c === e) return void r.splice(i, 1)
        }, l.dispatchEvent = function(t) {
            var e, i, r, s = this._listeners[t];
            if (s)
                for ((e = s.length) > 1 && (s = s.slice(0)), i = this._eventTarget; --e > -1;)(r = s[e]) && (r.up ? r.c.call(r.s || i, { type: t, target: i }) : r.c.call(r.s || i))
        };
        var O = t.requestAnimationFrame,
            k = t.cancelAnimationFrame,
            R = Date.now || function() { return (new Date).getTime() },
            C = R();
        for (o = (a = ["ms", "moz", "webkit", "o"]).length; --o > -1 && !O;) O = t[a[o] + "RequestAnimationFrame"], k = t[a[o] + "CancelAnimationFrame"] || t[a[o] + "CancelRequestAnimationFrame"];
        T("Ticker", function(t, e) {
            var i, s, n, a, o, l = this,
                c = R(),
                f = !(!1 === e || !O) && "auto",
                p = 500,
                m = 33,
                g = function(t) {
                    var e, r, h = R() - C;
                    h > p && (c += h - m), C += h, l.time = (C - c) / 1e3, e = l.time - o, (!i || e > 0 || !0 === t) && (l.frame++, o += e + (e >= a ? .004 : a - e), r = !0), !0 !== t && (n = s(g)), r && l.dispatchEvent("tick")
                };
            S.call(l), l.time = l.frame = 0, l.tick = function() { g(!0) }, l.lagSmoothing = function(t, e) { return arguments.length ? (p = t || 1 / _, void(m = Math.min(e, p, 0))) : 1 / _ > p }, l.sleep = function() { null != n && (f && k ? k(n) : clearTimeout(n), s = d, n = null, l === h && (u = !1)) }, l.wake = function(t) { null !== n ? l.sleep() : t ? c += -C + (C = R()) : l.frame > 10 && (C = R() - p + 5), s = 0 === i ? d : f && O ? O : function(t) { return setTimeout(t, 1e3 * (o - l.time) + 1 | 0) }, l === h && (u = !0), g(2) }, l.fps = function(t) { return arguments.length ? (a = 1 / ((i = t) || 60), o = this.time + a, void l.wake()) : i }, l.useRAF = function(t) { return arguments.length ? (l.sleep(), f = t, void l.fps(i)) : f }, l.fps(t), setTimeout(function() { "auto" === f && l.frame < 5 && "hidden" !== (r || {}).visibilityState && l.useRAF(!1) }, 1500)
        }), (l = f.Ticker.prototype = new f.events.EventDispatcher).constructor = f.Ticker;
        var A = T("core.Animation", function(t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, $) {
                u || h.wake();
                var i = this.vars.useFrames ? G : $;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        h = A.ticker = new f.Ticker, (l = A.prototype)._dirty = l._gc = l._initted = l._paused = !1, l._totalTime = l._time = 0, l._rawPrevTime = -1, l._next = l._last = l._onUpdate = l._timeline = l.timeline = null, l._paused = !1;
        var M = function() {
            u && R() - C > 2e3 && ("hidden" !== (r || {}).visibilityState || !h.lagSmoothing()) && h.wake();
            var t = setTimeout(M, 2e3);
            t.unref && t.unref()
        };
        M(), l.play = function(t, e) { return null != t && this.seek(t, e), this.reversed(!1).paused(!1) }, l.pause = function(t, e) { return null != t && this.seek(t, e), this.paused(!0) }, l.resume = function(t, e) { return null != t && this.seek(t, e), this.paused(!1) }, l.seek = function(t, e) { return this.totalTime(Number(t), !1 !== e) }, l.restart = function(t, e) { return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0) }, l.reverse = function(t, e) { return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1) }, l.render = function(t, e, i) {}, l.invalidate = function() { return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this }, l.isActive = function() {
            var t, e = this._timeline,
                i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
        }, l._enabled = function(t, e) { return u || h.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1 }, l._kill = function(t, e) { return this._enabled(!1, !1) }, l.kill = function(t, e) { return this._kill(t, e), this }, l._uncache = function(t) { for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline; return this }, l._swapSelfInParams = function(t) { for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this); return i }, l._callback = function(t) {
            var e = this.vars,
                i = e[t],
                r = e[t + "Params"],
                s = e[t + "Scope"] || e.callbackScope || this;
            switch (r ? r.length : 0) {
                case 0:
                    i.call(s);
                    break;
                case 1:
                    i.call(s, r[0]);
                    break;
                case 2:
                    i.call(s, r[0], r[1]);
                    break;
                default:
                    i.apply(s, r)
            }
        }, l.eventCallback = function(t, e, i, r) {
            if ("on" === (t || "").substr(0, 2)) {
                var s = this.vars;
                if (1 === arguments.length) return s[t];
                null == e ? delete s[t] : (s[t] = e, s[t + "Params"] = m(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, s[t + "Scope"] = r), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, l.delay = function(t) { return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay }, l.duration = function(t) { return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration) }, l.totalDuration = function(t) { return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration }, l.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time }, l.totalTime = function(t, e, i) {
            if (u || h.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var r = this._totalDuration,
                        s = this._timeline;
                    if (t > r && !i && (t = r), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? r - t : t) / this._timeScale, s._dirty || this._uncache(!1), s._timeline)
                        for (; s._timeline;) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (z.length && Q(), this.render(t, e, !1), z.length && Q())
            }
            return this
        }, l.progress = l.totalProgress = function(t, e) { var i = this.duration(); return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio }, l.startTime = function(t) { return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime }, l.endTime = function(t) { return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale }, l.timeScale = function(t) { if (!arguments.length) return this._timeScale; var e, i; for (t = t || _, this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline; return this }, l.reversed = function(t) { return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed }, l.paused = function(t) { if (!arguments.length) return this._paused; var e, i, r = this._timeline; return t != this._paused && r && (u || t || h.wake(), i = (e = r.rawTime()) - this._pauseTime, !t && r.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = r.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this };
        var D = T("core.SimpleTimeline", function(t) { A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0 });
        (l = D.prototype = new A).constructor = D, l.kill()._gc = !1, l._first = l._last = l._recent = null, l._sortChildren = !1, l.add = l.insert = function(t, e, i, r) {
            var s, n;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), s = this._last, this._sortChildren)
                for (n = t._startTime; s && s._startTime > n;) s = s._prev;
            return s ? (t._next = s._next, s._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = s, this._recent = t, this._timeline && this._uncache(!0), this
        }, l._remove = function(t, e) { return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this }, l.render = function(t, e, i) { var r, s = this._first; for (this._totalTime = this._time = this._rawPrevTime = t; s;) r = s._next, (s._active || t >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = r }, l.rawTime = function() { return u || h.wake(), this._totalTime };
        var E = T("TweenLite", function(e, i, r) {
                if (A.call(this, i, r), this.render = E.prototype.render, null == e) throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : E.selector(e) || e;
                var s, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                    l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? H[E.defaultOverwrite] : "number" == typeof l ? l >> 0 : H[l], (o || e instanceof Array || e.push && m(e)) && "number" != typeof e[0])
                    for (this._targets = a = p(e), this._propLookup = [], this._siblings = [], s = 0; s < a.length; s++)(n = a[s]) ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(s--, 1), this._targets = a = a.concat(p(n))) : (this._siblings[s] = K(n, this, !1), 1 === l && this._siblings[s].length > 1 && tt(n, this, null, 1, this._siblings[s])) : "string" == typeof(n = a[s--] = E.selector(n)) && a.splice(s + 1, 1) : a.splice(s--, 1);
                else this._propLookup = {}, this._siblings = K(e, this, !1), 1 === l && this._siblings.length > 1 && tt(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -_, this.render(Math.min(0, -this._delay)))
            }, !0),
            F = function(e) { return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType) };
        (l = E.prototype = new A).constructor = E, l.kill()._gc = !1, l.ratio = 0, l._firstPT = l._targets = l._overwrittenProps = l._startAt = null, l._notifyPluginsOfEnabled = l._lazy = !1, E.version = "2.0.2", E.defaultEase = l._ease = new w(null, null, 1, 1), E.defaultOverwrite = "auto", E.ticker = h, E.autoSleep = 120, E.lagSmoothing = function(t, e) { h.lagSmoothing(t, e) }, E.selector = t.$ || t.jQuery || function(e) { var i = t.$ || t.jQuery; return i ? (E.selector = i, i(e)) : (r || (r = t.document), r ? r.querySelectorAll ? r.querySelectorAll(e) : r.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e) };
        var z = [],
            L = {},
            N = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            I = /[\+-]=-?[\.\d]/,
            X = function(t) { for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m.call(this._tween, e, this._target || i.t, this._tween) : 1e-6 > e && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next },
            B = function(t, e, i, r) {
                var s, n, a, o, l, h, u, c = [],
                    f = 0,
                    _ = "",
                    p = 0;
                for (c.start = t, c.end = e, t = c[0] = t + "", e = c[1] = e + "", i && (i(c), t = c[0], e = c[1]), c.length = 0, s = t.match(N) || [], n = e.match(N) || [], r && (r._next = null, r.blob = 1, c._firstPT = c._applyPT = r), l = n.length, o = 0; l > o; o++) u = n[o], _ += (h = e.substr(f, e.indexOf(u, f) - f)) || !o ? h : ",", f += h.length, p ? p = (p + 1) % 5 : "rgba(" === h.substr(-5) && (p = 1), u === s[o] || s.length <= o ? _ += u : (_ && (c.push(_), _ = ""), a = parseFloat(s[o]), c.push(a), c._firstPT = { _next: c._firstPT, t: c, p: c.length - 1, s: a, c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - a) || 0, f: 0, m: p && 4 > p ? Math.round : 0 }), f += u.length;
                return (_ += e.substr(f)) && c.push(_), c.setRatio = X, I.test(e) && (c.end = null), c
            },
            j = function(t, e, i, r, s, n, a, o, l) {
                "function" == typeof r && (r = r(l || 0, t));
                var h = typeof t[e],
                    u = "function" !== h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                    c = "get" !== i ? i : u ? a ? t[u](a) : t[u]() : t[e],
                    f = "string" == typeof r && "=" === r.charAt(1),
                    _ = { t: t, p: e, s: c, f: "function" === h, pg: 0, n: s || e, m: n ? "function" == typeof n ? n : Math.round : 0, pr: 0, c: f ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - c || 0 };
                return ("number" != typeof c || "number" != typeof r && !f) && (a || isNaN(c) || !f && isNaN(r) || "boolean" == typeof c || "boolean" == typeof r ? (_.fp = a, _ = { t: B(c, f ? parseFloat(_.s) + _.c + (_.s + "").replace(/[0-9\-\.]/g, "") : r, o || E.defaultStringFilter, _), p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: s || e, pr: 0, m: 0 }) : (_.s = parseFloat(c), f || (_.c = parseFloat(r) - _.s || 0))), _.c ? ((_._next = this._firstPT) && (_._next._prev = _), this._firstPT = _, _) : void 0
            },
            Y = E._internals = { isArray: m, isSelector: F, lazyTweens: z, blobDif: B },
            U = E._plugins = {},
            V = Y.tweenLookup = {},
            q = 0,
            W = Y.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1, yoyoEase: 1 },
            H = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
            G = A._rootFramesTimeline = new D,
            $ = A._rootTimeline = new D,
            Z = 30,
            Q = Y.lazyRender = function() {
                var t, e = z.length;
                for (L = {}; --e > -1;)(t = z[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                z.length = 0
            };
        $._startTime = h.time, G._startTime = h.frame, $._active = G._active = !0, setTimeout(Q, 1), A._updateRoot = E.render = function() {
            var t, e, i;
            if (z.length && Q(), $.render((h.time - $._startTime) * $._timeScale, !1, !1), G.render((h.frame - G._startTime) * G._timeScale, !1, !1), z.length && Q(), h.frame >= Z) {
                for (i in Z = h.frame + (parseInt(E.autoSleep, 10) || 120), V) {
                    for (t = (e = V[i].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete V[i]
                }
                if ((!(i = $._first) || i._paused) && E.autoSleep && !G._first && 1 === h._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || h.sleep()
                }
            }
        }, h.addEventListener("tick", A._updateRoot);
        var K = function(t, e, i) {
                var r, s, n = t._gsTweenID;
                if (V[n || (t._gsTweenID = n = "t" + q++)] || (V[n] = { target: t, tweens: [] }), e && ((r = V[n].tweens)[s = r.length] = e, i))
                    for (; --s > -1;) r[s] === e && r.splice(s, 1);
                return V[n].tweens
            },
            J = function(t, e, i, r) { var s, n, a = t.vars.onOverwrite; return a && (s = a(t, e, i, r)), (a = E.onOverwrite) && (n = a(t, e, i, r)), !1 !== s && !1 !== n },
            tt = function(t, e, i, r, s) {
                var n, a, o, l;
                if (1 === r || r >= 4) {
                    for (l = s.length, n = 0; l > n; n++)
                        if ((o = s[n]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                        else if (5 === r) break;
                    return a
                }
                var h, u = e._startTime + _,
                    c = [],
                    f = 0,
                    p = 0 === e._duration;
                for (n = s.length; --n > -1;)(o = s[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || et(e, 0, p), 0 === et(o, h, p) && (c[f++] = o)) : o._startTime <= u && o._startTime + o.totalDuration() / o._timeScale > u && ((p || !o._initted) && u - o._startTime <= 2e-10 || (c[f++] = o)));
                for (n = f; --n > -1;)
                    if (l = (o = c[n])._firstPT, 2 === r && o._kill(i, t, e) && (a = !0), 2 !== r || !o._firstPT && o._initted && l) {
                        if (2 !== r && !J(o, e)) continue;
                        o._enabled(!1, !1) && (a = !0)
                    }
                return a
            },
            et = function(t, e, i) {
                for (var r = t._timeline, s = r._timeScale, n = t._startTime; r._timeline;) {
                    if (n += r._startTime, s *= r._timeScale, r._paused) return -100;
                    r = r._timeline
                }
                return (n /= s) > e ? n - e : i && n === e || !t._initted && 2 * _ > n - e ? _ : (n += t.totalDuration() / t._timeScale / s) > e + _ ? 0 : n - e - _
            };
        l._init = function() {
            var t, e, i, r, s, n, a = this.vars,
                o = this._overwrittenProps,
                l = this._duration,
                h = !!a.immediateRender,
                u = a.ease;
            if (a.startAt) {
                for (r in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), s = {}, a.startAt) s[r] = a.startAt[r];
                if (s.data = "isStart", s.overwrite = !1, s.immediateRender = !0, s.lazy = h && !1 !== a.lazy, s.startAt = s.delay = null, s.onUpdate = a.onUpdate, s.onUpdateParams = a.onUpdateParams, s.onUpdateScope = a.onUpdateScope || a.callbackScope || this, this._startAt = E.to(this.target || {}, 0, s), h)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== l) return
            } else if (a.runBackwards && 0 !== l)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else { for (r in 0 !== this._time && (h = !1), i = {}, a) W[r] && "autoCSS" !== r || (i[r] = a[r]); if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== a.lazy, i.immediateRender = h, this._startAt = E.to(this.target, 0, i), h) { if (0 === this._time) return } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null) }
            if (this._ease = u = u ? u instanceof w ? u : "function" == typeof u ? new w(u, a.easeParams) : b[u] || E.defaultEase : E.defaultEase, a.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (n = this._targets.length, t = 0; n > t; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null, t) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
            if (e && E._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = a.onUpdate, this._initted = !0
        }, l._initProps = function(e, i, r, s, n) {
            var a, o, l, h, u, c;
            if (null == e) return !1;
            for (a in L[e._gsTweenID] && Q(), this.vars.css || e.style && e !== t && e.nodeType && U.css && !1 !== this.vars.autoCSS && function(t, e) {
                    var i, r = {};
                    for (i in t) W[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!U[i] || U[i] && U[i]._autoCSS) || (r[i] = t[i], delete t[i]);
                    t.css = r
                }(this.vars, e), this.vars)
                if (c = this.vars[a], W[a]) c && (c instanceof Array || c.push && m(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[a] = c = this._swapSelfInParams(c, this));
                else if (U[a] && (h = new U[a])._onInitTween(e, this.vars[a], this, n)) {
                for (this._firstPT = u = { _next: this._firstPT, t: h, p: "setRatio", s: 0, c: 1, f: 1, n: a, pg: 1, pr: h._priority, m: 0 }, o = h._overwriteProps.length; --o > -1;) i[h._overwriteProps[o]] = this._firstPT;
                (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
            } else i[a] = j.call(this, e, a, "get", c, a, 0, null, this.vars.stringFilter, n);
            return s && this._kill(s, e) ? this._initProps(e, i, r, s, n) : this._overwrite > 1 && this._firstPT && r.length > 1 && tt(e, this, i, this._overwrite, r) ? (this._kill(i, e), this._initProps(e, i, r, s, n)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (L[e._gsTweenID] = !0), l)
        }, l.render = function(t, e, i) {
            var r, s, n, a, o = this._time,
                l = this._duration,
                h = this._rawPrevTime;
            if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (r = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > h || 0 >= t && t >= -1e-7 || h === _ && "isPause" !== this.data) && h !== t && (i = !0, h > _ && (s = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : _);
            else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (s = "onReverseComplete", r = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== _ || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : _)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var u = t / l,
                    c = this._easeType,
                    f = this._easePower;
                (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === c ? 1 - u : 2 === c ? u : .5 > t / l ? u / 2 : 1 - u / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== o || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, z.push(this), void(this._lazy = [t, e]);
                    this._time && !r ? this.ratio = this._ease.getRatio(this._time / l) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                this._onUpdate && (0 > t && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== o || r || i) && this._callback("onUpdate")), s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === l && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0))
            }
        }, l._kill = function(t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : E.selector(e) || e;
            var r, s, n, a, o, l, h, u, c, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline,
                _ = this._firstPT;
            if ((m(e) || F(e)) && "number" != typeof e[0])
                for (r = e.length; --r > -1;) this._kill(t, e[r], i) && (l = !0);
            else {
                if (this._targets) {
                    for (r = this._targets.length; --r > -1;)
                        if (e === this._targets[r]) { o = this._propLookup[r] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[r] = t ? this._overwrittenProps[r] || {} : "all"; break }
                } else {
                    if (e !== this.target) return !1;
                    o = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (o) { if (h = t || o, u = t !== s && "all" !== s && t !== o && ("object" != typeof t || !t._tempKill), i && (E.onOverwrite || this.vars.onOverwrite)) { for (n in h) o[n] && (c || (c = []), c.push(n)); if ((c || !t) && !J(this, i, e, c)) return !1 } for (n in h)(a = o[n]) && (f && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), u && (s[n] = 1);!this._firstPT && this._initted && _ && this._enabled(!1, !1) }
            }
            return l
        }, l.invalidate = function() { return this._notifyPluginsOfEnabled && E._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(Math.min(0, -this._delay))), this }, l._enabled = function(t, e) {
            if (u || h.wake(), t && this._gc) {
                var i, r = this._targets;
                if (r)
                    for (i = r.length; --i > -1;) this._siblings[i] = K(r[i], this, !0);
                else this._siblings = K(this.target, this, !0)
            }
            return A.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && E._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }, E.to = function(t, e, i) { return new E(t, e, i) }, E.from = function(t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new E(t, e, i) }, E.fromTo = function(t, e, i, r) { return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new E(t, e, r) }, E.delayedCall = function(t, e, i, r, s) { return new E(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: r, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, lazy: !1, useFrames: s, overwrite: 0 }) }, E.set = function(t, e) { return new E(t, 0, e) }, E.getTweensOf = function(t, e) {
            if (null == t) return [];
            var i, r, s, n;
            if (t = "string" != typeof t ? t : E.selector(t) || t, (m(t) || F(t)) && "number" != typeof t[0]) {
                for (i = t.length, r = []; --i > -1;) r = r.concat(E.getTweensOf(t[i], e));
                for (i = r.length; --i > -1;)
                    for (n = r[i], s = i; --s > -1;) n === r[s] && r.splice(i, 1)
            } else if (t._gsTweenID)
                for (i = (r = K(t).concat()).length; --i > -1;)(r[i]._gc || e && !r[i].isActive()) && r.splice(i, 1);
            return r || []
        }, E.killTweensOf = E.killDelayedCallsTo = function(t, e, i) { "object" == typeof e && (i = e, e = !1); for (var r = E.getTweensOf(t, e), s = r.length; --s > -1;) r[s]._kill(i, t) };
        var it = T("plugins.TweenPlugin", function(t, e) { this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = it.prototype }, !0);
        if (l = it.prototype, it.version = "1.19.0", it.API = 2, l._firstPT = null, l._addTween = j, l.setRatio = X, l._kill = function(t) {
                var e, i = this._overwriteProps,
                    r = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                for (; r;) null != t[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
                return !1
            }, l._mod = l._roundProps = function(t) { for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next }, E._onPluginEvent = function(t, e) {
                var i, r, s, n, a, o = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; o;) {
                        for (a = o._next, r = s; r && r.pr > o.pr;) r = r._next;
                        (o._prev = r ? r._prev : n) ? o._prev._next = o: s = o, (o._next = r) ? r._prev = o : n = o, o = a
                    }
                    o = e._firstPT = s
                }
                for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                return i
            }, it.activate = function(t) { for (var e = t.length; --e > -1;) t[e].API === it.API && (U[(new t[e])._propName] = t[e]); return !0 }, y.plugin = function(t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    r = t.priority || 0,
                    s = t.overwriteProps,
                    n = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
                    a = T("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() { it.call(this, i, r), this._overwriteProps = s || [] }, !0 === t.global),
                    o = a.prototype = new it(i);
                for (e in o.constructor = a, a.API = t.API, n) "function" == typeof t[e] && (o[n[e]] = t[e]);
                return a.version = t.version, it.activate([a]), a
            }, a = t._gsQueue) { for (o = 0; o < a.length; o++) a[o](); for (l in g) g[l].func || t.console.log("GSAP encountered missing dependency: " + l) }
        u = !1
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function(t, e) { "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.ScrollMagic = e() }(this, function() {
        "use strict";
        var t = function() {};
        t.version = "2.0.7", window.addEventListener("mousewheel", function() {});
        var e = "data-scrollmagic-pin-spacer";
        t.Controller = function(r) {
            var n, a, o = "REVERSE",
                l = "PAUSED",
                h = i.defaults,
                u = this,
                c = s.extend({}, h, r),
                f = [],
                _ = !1,
                p = 0,
                d = l,
                m = !0,
                g = 0,
                v = !0,
                y = function() { 0 < c.refreshInterval && (a = window.setTimeout(O, c.refreshInterval)) },
                T = function() { return c.vertical ? s.get.scrollTop(c.container) : s.get.scrollLeft(c.container) },
                x = function() { return c.vertical ? s.get.height(c.container) : s.get.width(c.container) },
                w = this._setScrollPos = function(t) { c.vertical ? m ? window.scrollTo(s.get.scrollLeft(), t) : c.container.scrollTop = t : m ? window.scrollTo(t, s.get.scrollTop()) : c.container.scrollLeft = t },
                b = function() {
                    if (v && _) {
                        var t = s.type.Array(_) ? _ : f.slice(0);
                        _ = !1;
                        var e = p,
                            i = (p = u.scrollPos()) - e;
                        0 !== i && (d = 0 < i ? "FORWARD" : o), d === o && t.reverse(), t.forEach(function(t, e) { t.update(!0) })
                    }
                },
                P = function() { n = s.rAF(b) },
                S = function(t) { "resize" == t.type && (g = x(), d = l), !0 !== _ && (_ = !0, P()) },
                O = function() {
                    if (!m && g != x()) {
                        var t;
                        try { t = new Event("resize", { bubbles: !1, cancelable: !1 }) } catch (e) {
                            (t = document.createEvent("Event")).initEvent("resize", !1, !1)
                        }
                        c.container.dispatchEvent(t)
                    }
                    f.forEach(function(t, e) { t.refresh() }), y()
                };
            this._options = c;
            var k = function(t) { if (t.length <= 1) return t; var e = t.slice(0); return e.sort(function(t, e) { return t.scrollOffset() > e.scrollOffset() ? 1 : -1 }), e };
            return this.addScene = function(e) {
                    if (s.type.Array(e)) e.forEach(function(t, e) { u.addScene(t) });
                    else if (e instanceof t.Scene)
                        if (e.controller() !== u) e.addTo(u);
                        else if (f.indexOf(e) < 0)
                        for (var i in f.push(e), f = k(f), e.on("shift.controller_sort", function() { f = k(f) }), c.globalSceneOptions) e[i] && e[i].call(e, c.globalSceneOptions[i]);
                    return u
                }, this.removeScene = function(t) {
                    if (s.type.Array(t)) t.forEach(function(t, e) { u.removeScene(t) });
                    else { var e = f.indexOf(t); - 1 < e && (t.off("shift.controller_sort"), f.splice(e, 1), t.remove()) }
                    return u
                }, this.updateScene = function(e, i) { return s.type.Array(e) ? e.forEach(function(t, e) { u.updateScene(t, i) }) : i ? e.update(!0) : !0 !== _ && e instanceof t.Scene && (-1 == (_ = _ || []).indexOf(e) && _.push(e), _ = k(_), P()), u }, this.update = function(t) { return S({ type: "resize" }), t && b(), u }, this.scrollTo = function(i, r) {
                    if (s.type.Number(i)) w.call(c.container, i, r);
                    else if (i instanceof t.Scene) i.controller() === u && u.scrollTo(i.scrollOffset(), r);
                    else if (s.type.Function(i)) w = i;
                    else {
                        var n = s.get.elements(i)[0];
                        if (n) {
                            for (; n.parentNode.hasAttribute(e);) n = n.parentNode;
                            var a = c.vertical ? "top" : "left",
                                o = s.get.offset(c.container),
                                l = s.get.offset(n);
                            m || (o[a] -= u.scrollPos()), u.scrollTo(l[a] - o[a], r)
                        }
                    }
                    return u
                }, this.scrollPos = function(t) { return arguments.length ? (s.type.Function(t) && (T = t), u) : T.call(u) }, this.info = function(t) { var e = { size: g, vertical: c.vertical, scrollPos: p, scrollDirection: d, container: c.container, isDocument: m }; return arguments.length ? void 0 !== e[t] ? e[t] : void 0 : e }, this.loglevel = function(t) { return u }, this.enabled = function(t) { return arguments.length ? (v != t && (v = !!t, u.updateScene(f, !0)), u) : v }, this.destroy = function(t) { window.clearTimeout(a); for (var e = f.length; e--;) f[e].destroy(t); return c.container.removeEventListener("resize", S), c.container.removeEventListener("scroll", S), s.cAF(n), null },
                function() {
                    for (var t in c) h.hasOwnProperty(t) || delete c[t];
                    if (c.container = s.get.elements(c.container)[0], !c.container) throw "ScrollMagic.Controller init failed.";
                    (m = c.container === window || c.container === document.body || !document.body.contains(c.container)) && (c.container = window), g = x(), c.container.addEventListener("resize", S), c.container.addEventListener("scroll", S);
                    var e = parseInt(c.refreshInterval, 10);
                    c.refreshInterval = s.type.Number(e) ? e : h.refreshInterval, y()
                }(), u
        };
        var i = { defaults: { container: window, vertical: !0, globalSceneOptions: {}, loglevel: 2, refreshInterval: 100 } };
        t.Controller.addOption = function(t, e) { i.defaults[t] = e }, t.Controller.extend = function(e) {
            var i = this;
            t.Controller = function() { return i.apply(this, arguments), this.$super = s.extend({}, this), e.apply(this, arguments) || this }, s.extend(t.Controller, i), t.Controller.prototype = i.prototype, t.Controller.prototype.constructor = t.Controller
        }, t.Scene = function(i) {
            var n, a, o = "BEFORE",
                l = "DURING",
                h = "AFTER",
                u = r.defaults,
                c = this,
                f = s.extend({}, u, i),
                _ = o,
                p = 0,
                d = { start: 0, end: 0 },
                m = 0,
                g = !0,
                v = {};
            this.on = function(t, e) {
                return s.type.Function(e) && (t = t.trim().split(" ")).forEach(function(t) {
                    var i = t.split("."),
                        r = i[0],
                        s = i[1];
                    "*" != r && (v[r] || (v[r] = []), v[r].push({ namespace: s || "", callback: e }))
                }), c
            }, this.off = function(t, e) {
                return t && (t = t.trim().split(" ")).forEach(function(t, i) {
                    var r = t.split("."),
                        s = r[0],
                        n = r[1] || "";
                    ("*" === s ? Object.keys(v) : [s]).forEach(function(t) {
                        for (var i = v[t] || [], r = i.length; r--;) { var s = i[r];!s || n !== s.namespace && "*" !== n || e && e != s.callback || i.splice(r, 1) }
                        i.length || delete v[t]
                    })
                }), c
            }, this.trigger = function(e, i) {
                if (e) {
                    var r = e.trim().split("."),
                        s = r[0],
                        n = r[1],
                        a = v[s];
                    a && a.forEach(function(e, r) { n && n !== e.namespace || e.callback.call(c, new t.Event(s, e.namespace, c, i)) })
                }
                return c
            }, c.on("change.internal", function(t) { "loglevel" !== t.what && "tweenChanges" !== t.what && ("triggerElement" === t.what ? b() : "reverse" === t.what && c.update()) }).on("shift.internal", function(t) { x(), c.update() }), this.addTo = function(e) { return e instanceof t.Controller && a != e && (a && a.removeScene(c), a = e, O(), w(!0), b(!0), x(), a.info("container").addEventListener("resize", P), e.addScene(c), c.trigger("add", { controller: a }), c.update()), c }, this.enabled = function(t) { return arguments.length ? (g != t && (g = !!t, c.update(!0)), c) : g }, this.remove = function() {
                if (a) {
                    a.info("container").removeEventListener("resize", P);
                    var t = a;
                    a = void 0, t.removeScene(c), c.trigger("remove")
                }
                return c
            }, this.destroy = function(t) { return c.trigger("destroy", { reset: t }), c.remove(), c.off("*.*"), null }, this.update = function(t) {
                if (a)
                    if (t)
                        if (a.enabled() && g) {
                            var e, i = a.info("scrollPos");
                            e = 0 < f.duration ? (i - d.start) / (d.end - d.start) : i >= d.start ? 1 : 0, c.trigger("update", { startPos: d.start, endPos: d.end, scrollPos: i }), c.progress(e)
                        } else y && _ === l && C(!0);
                else a.updateScene(c, !1);
                return c
            }, this.refresh = function() { return w(), b(), c }, this.progress = function(t) {
                if (arguments.length) {
                    var e = !1,
                        i = _,
                        r = a ? a.info("scrollDirection") : "PAUSED",
                        s = f.reverse || p <= t;
                    if (0 === f.duration ? (e = p != t, _ = 0 == (p = t < 1 && s ? 0 : 1) ? o : l) : t < 0 && _ !== o && s ? (_ = o, e = !(p = 0)) : 0 <= t && t < 1 && s ? (p = t, _ = l, e = !0) : 1 <= t && _ !== h ? (p = 1, _ = h, e = !0) : _ !== l || s || C(), e) {
                        var n = { progress: p, state: _, scrollDirection: r },
                            u = _ != i,
                            d = function(t) { c.trigger(t, n) };
                        u && i !== l && (d("enter"), d(i === o ? "start" : "end")), d("progress"), u && _ !== l && (d(_ === o ? "start" : "end"), d("leave"))
                    }
                    return c
                }
                return p
            };
            var y, T, x = function() { d = { start: m + f.offset }, a && f.triggerElement && (d.start -= a.info("size") * f.triggerHook), d.end = d.start + f.duration },
                w = function(t) {
                    if (n) {
                        var e = "duration";
                        k(e, n.call(c)) && !t && (c.trigger("change", { what: e, newval: f[e] }), c.trigger("shift", { reason: e }))
                    }
                },
                b = function(t) {
                    var i = 0,
                        r = f.triggerElement;
                    if (a && (r || 0 < m)) {
                        if (r)
                            if (r.parentNode) {
                                for (var n = a.info(), o = s.get.offset(n.container), l = n.vertical ? "top" : "left"; r.parentNode.hasAttribute(e);) r = r.parentNode;
                                var h = s.get.offset(r);
                                n.isDocument || (o[l] -= a.scrollPos()), i = h[l] - o[l]
                            } else c.triggerElement(void 0);
                        var u = i != m;
                        m = i, u && !t && c.trigger("shift", { reason: "triggerElementPosition" })
                    }
                },
                P = function(t) { 0 < f.triggerHook && c.trigger("shift", { reason: "containerResize" }) },
                S = s.extend(r.validate, {
                    duration: function(t) {
                        if (s.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                            var e = parseFloat(t) / 100;
                            t = function() { return a ? a.info("size") * e : 0 }
                        }
                        if (s.type.Function(t)) { n = t; try { t = parseFloat(n.call(c)) } catch (e) { t = -1 } }
                        if (t = parseFloat(t), !s.type.Number(t) || t < 0) throw n && (n = void 0), 0;
                        return t
                    }
                }),
                O = function(t) {
                    (t = arguments.length ? [t] : Object.keys(S)).forEach(function(t, e) { var i; if (S[t]) try { i = S[t](f[t]) } catch (e) { i = u[t] } finally { f[t] = i } })
                },
                k = function(t, e) {
                    var i = !1,
                        r = f[t];
                    return f[t] != e && (f[t] = e, O(t), i = r != f[t]), i
                },
                R = function(t) { c[t] || (c[t] = function(e) { return arguments.length ? ("duration" === t && (n = void 0), k(t, e) && (c.trigger("change", { what: t, newval: f[t] }), -1 < r.shifts.indexOf(t) && c.trigger("shift", { reason: t })), c) : f[t] }) };
            this.controller = function() { return a }, this.state = function() { return _ }, this.scrollOffset = function() { return d.start }, this.triggerPosition = function() { var t = f.offset; return a && (f.triggerElement ? t += m : t += a.info("size") * c.triggerHook()), t }, c.on("shift.internal", function(t) {
                var e = "duration" === t.reason;
                (_ === h && e || _ === l && 0 === f.duration) && C(), e && A()
            }).on("progress.internal", function(t) { C() }).on("add.internal", function(t) { A() }).on("destroy.internal", function(t) { c.removePin(t.reset) });
            var C = function(t) {
                    if (y && a) {
                        var e = a.info(),
                            i = T.spacer.firstChild;
                        if (t || _ !== l) {
                            var r = { position: T.inFlow ? "relative" : "absolute", top: 0, left: 0 },
                                n = s.css(i, "position") != r.position;
                            T.pushFollowers ? 0 < f.duration && (_ === h && 0 === parseFloat(s.css(T.spacer, "padding-top")) ? n = !0 : _ === o && 0 === parseFloat(s.css(T.spacer, "padding-bottom")) && (n = !0)) : r[e.vertical ? "top" : "left"] = f.duration * p, s.css(i, r), n && A()
                        } else {
                            "fixed" != s.css(i, "position") && (s.css(i, { position: "fixed" }), A());
                            var u = s.get.offset(T.spacer, !0),
                                c = f.reverse || 0 === f.duration ? e.scrollPos - d.start : Math.round(p * f.duration * 10) / 10;
                            u[e.vertical ? "top" : "left"] += c, s.css(T.spacer.firstChild, { top: u.top, left: u.left })
                        }
                    }
                },
                A = function() {
                    if (y && a && T.inFlow) {
                        var t = _ === l,
                            e = a.info("vertical"),
                            i = T.spacer.firstChild,
                            r = s.isMarginCollapseType(s.css(T.spacer, "display")),
                            n = {};
                        T.relSize.width || T.relSize.autoFullWidth ? t ? s.css(y, { width: s.get.width(T.spacer) }) : s.css(y, { width: "100%" }) : (n["min-width"] = s.get.width(e ? y : i, !0, !0), n.width = t ? n["min-width"] : "auto"), T.relSize.height ? t ? s.css(y, { height: s.get.height(T.spacer) - (T.pushFollowers ? f.duration : 0) }) : s.css(y, { height: "100%" }) : (n["min-height"] = s.get.height(e ? i : y, !0, !r), n.height = t ? n["min-height"] : "auto"), T.pushFollowers && (n["padding" + (e ? "Top" : "Left")] = f.duration * p, n["padding" + (e ? "Bottom" : "Right")] = f.duration * (1 - p)), s.css(T.spacer, n)
                    }
                },
                M = function() { a && y && _ === l && !a.info("isDocument") && C() },
                D = function() { a && y && _ === l && ((T.relSize.width || T.relSize.autoFullWidth) && s.get.width(window) != s.get.width(T.spacer.parentNode) || T.relSize.height && s.get.height(window) != s.get.height(T.spacer.parentNode)) && A() },
                E = function(t) { a && y && _ === l && !a.info("isDocument") && (t.preventDefault(), a._setScrollPos(a.info("scrollPos") - ((t.wheelDelta || t[a.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -t.detail))) };
            this.setPin = function(t, i) {
                if (i = s.extend({}, { pushFollowers: !0, spacerClass: "scrollmagic-pin-spacer" }, i), !(t = s.get.elements(t)[0])) return c;
                if ("fixed" === s.css(t, "position")) return c;
                if (y) {
                    if (y === t) return c;
                    c.removePin()
                }
                var r = (y = t).parentNode.style.display,
                    n = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                y.parentNode.style.display = "none";
                var a = "absolute" != s.css(y, "position"),
                    o = s.css(y, n.concat(["display"])),
                    l = s.css(y, ["width", "height"]);
                y.parentNode.style.display = r, !a && i.pushFollowers && (i.pushFollowers = !1);
                var h = y.parentNode.insertBefore(document.createElement("div"), y),
                    u = s.extend(o, { position: a ? "relative" : "absolute", boxSizing: "content-box", mozBoxSizing: "content-box", webkitBoxSizing: "content-box" });
                if (a || s.extend(u, s.css(y, ["width", "height"])), s.css(h, u), h.setAttribute(e, ""), s.addClass(h, i.spacerClass), T = { spacer: h, relSize: { width: "%" === l.width.slice(-1), height: "%" === l.height.slice(-1), autoFullWidth: "auto" === l.width && a && s.isMarginCollapseType(o.display) }, pushFollowers: i.pushFollowers, inFlow: a }, !y.___origStyle) {
                    y.___origStyle = {};
                    var f = y.style;
                    n.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function(t) { y.___origStyle[t] = f[t] || "" })
                }
                return T.relSize.width && s.css(h, { width: l.width }), T.relSize.height && s.css(h, { height: l.height }), h.appendChild(y), s.css(y, { position: a ? "relative" : "absolute", margin: "auto", top: "auto", left: "auto", bottom: "auto", right: "auto" }), (T.relSize.width || T.relSize.autoFullWidth) && s.css(y, { boxSizing: "border-box", mozBoxSizing: "border-box", webkitBoxSizing: "border-box" }), window.addEventListener("scroll", M), window.addEventListener("resize", M), window.addEventListener("resize", D), y.addEventListener("mousewheel", E), y.addEventListener("DOMMouseScroll", E), C(), c
            }, this.removePin = function(t) {
                if (y) {
                    if (_ === l && C(!0), t || !a) {
                        var i = T.spacer.firstChild;
                        if (i.hasAttribute(e)) {
                            var r = T.spacer.style,
                                n = {};
                            ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach(function(t) { n[t] = r[t] || "" }), s.css(i, n)
                        }
                        T.spacer.parentNode.insertBefore(i, T.spacer), T.spacer.parentNode.removeChild(T.spacer), y.parentNode.hasAttribute(e) || (s.css(y, y.___origStyle), delete y.___origStyle)
                    }
                    window.removeEventListener("scroll", M), window.removeEventListener("resize", M), window.removeEventListener("resize", D), y.removeEventListener("mousewheel", E), y.removeEventListener("DOMMouseScroll", E), y = void 0
                }
                return c
            };
            var F, z = [];
            return c.on("destroy.internal", function(t) { c.removeClassToggle(t.reset) }), this.setClassToggle = function(t, e) {
                    var i = s.get.elements(t);
                    return 0 !== i.length && s.type.String(e) && (0 < z.length && c.removeClassToggle(), F = e, z = i, c.on("enter.internal_class leave.internal_class", function(t) {
                        var e = "enter" === t.type ? s.addClass : s.removeClass;
                        z.forEach(function(t, i) { e(t, F) })
                    })), c
                }, this.removeClassToggle = function(t) { return t && z.forEach(function(t, e) { s.removeClass(t, F) }), c.off("start.internal_class end.internal_class"), F = void 0, z = [], c },
                function() {
                    for (var t in f) u.hasOwnProperty(t) || delete f[t];
                    for (var e in u) R(e);
                    O()
                }(), c
        };
        var r = {
            defaults: { duration: 0, offset: 0, triggerElement: void 0, triggerHook: .5, reverse: !0, loglevel: 2 },
            validate: {
                offset: function(t) { if (t = parseFloat(t), !s.type.Number(t)) throw 0; return t },
                triggerElement: function(t) {
                    if (t = t || void 0) {
                        var e = s.get.elements(t)[0];
                        if (!e || !e.parentNode) throw 0;
                        t = e
                    }
                    return t
                },
                triggerHook: function(t) {
                    var e = { onCenter: .5, onEnter: 1, onLeave: 0 };
                    if (s.type.Number(t)) t = Math.max(0, Math.min(parseFloat(t), 1));
                    else {
                        if (!(t in e)) throw 0;
                        t = e[t]
                    }
                    return t
                },
                reverse: function(t) { return !!t }
            },
            shifts: ["duration", "offset", "triggerHook"]
        };
        t.Scene.addOption = function(t, e, i, s) { t in r.defaults || (r.defaults[t] = e, r.validate[t] = i, s && r.shifts.push(t)) }, t.Scene.extend = function(e) {
            var i = this;
            t.Scene = function() { return i.apply(this, arguments), this.$super = s.extend({}, this), e.apply(this, arguments) || this }, s.extend(t.Scene, i), t.Scene.prototype = i.prototype, t.Scene.prototype.constructor = t.Scene
        }, t.Event = function(t, e, i, r) { for (var s in r = r || {}) this[s] = r[s]; return this.type = t, this.target = this.currentTarget = i, this.namespace = e || "", this.timeStamp = this.timestamp = Date.now(), this };
        var s = t._util = function(t) {
            var e, i = {},
                r = function(t) { return parseFloat(t) || 0 },
                s = function(e) { return e.currentStyle ? e.currentStyle : t.getComputedStyle(e) },
                n = function(e, i, n, a) {
                    if ((i = i === document ? t : i) === t) a = !1;
                    else if (!c.DomElement(i)) return 0;
                    e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
                    var o = (n ? i["offset" + e] || i["outer" + e] : i["client" + e] || i["inner" + e]) || 0;
                    if (n && a) {
                        var l = s(i);
                        o += "Height" === e ? r(l.marginTop) + r(l.marginBottom) : r(l.marginLeft) + r(l.marginRight)
                    }
                    return o
                },
                a = function(t) { return t.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(t) { return t[1].toUpperCase() }) };
            i.extend = function(t) {
                for (t = t || {}, e = 1; e < arguments.length; e++)
                    if (arguments[e])
                        for (var i in arguments[e]) arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
                return t
            }, i.isMarginCollapseType = function(t) { return -1 < ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t) };
            var o = 0,
                l = ["ms", "moz", "webkit", "o"],
                h = t.requestAnimationFrame,
                u = t.cancelAnimationFrame;
            for (e = 0; !h && e < 4; ++e) h = t[l[e] + "RequestAnimationFrame"], u = t[l[e] + "CancelAnimationFrame"] || t[l[e] + "CancelRequestAnimationFrame"];
            h || (h = function(e) {
                var i = (new Date).getTime(),
                    r = Math.max(0, 16 - (i - o)),
                    s = t.setTimeout(function() { e(i + r) }, r);
                return o = i + r, s
            }), u || (u = function(e) { t.clearTimeout(e) }), i.rAF = h.bind(t), i.cAF = u.bind(t);
            var c = i.type = function(t) { return Object.prototype.toString.call(t).replace(/^\[object (.+)\]$/, "$1").toLowerCase() };
            c.String = function(t) { return "string" === c(t) }, c.Function = function(t) { return "function" === c(t) }, c.Array = function(t) { return Array.isArray(t) }, c.Number = function(t) { return !c.Array(t) && 0 <= t - parseFloat(t) + 1 }, c.DomElement = function(t) { return "object" == typeof HTMLElement || "function" == typeof HTMLElement ? t instanceof HTMLElement || t instanceof SVGElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName };
            var f = i.get = {};
            return f.elements = function(e) {
                var i = [];
                if (c.String(e)) try { e = document.querySelectorAll(e) } catch (e) { return i }
                if ("nodelist" === c(e) || c.Array(e) || e instanceof NodeList)
                    for (var r = 0, s = i.length = e.length; r < s; r++) {
                        var n = e[r];
                        i[r] = c.DomElement(n) ? n : f.elements(n)
                    } else(c.DomElement(e) || e === document || e === t) && (i = [e]);
                return i
            }, f.scrollTop = function(e) { return e && "number" == typeof e.scrollTop ? e.scrollTop : t.pageYOffset || 0 }, f.scrollLeft = function(e) { return e && "number" == typeof e.scrollLeft ? e.scrollLeft : t.pageXOffset || 0 }, f.width = function(t, e, i) { return n("width", t, e, i) }, f.height = function(t, e, i) { return n("height", t, e, i) }, f.offset = function(t, e) {
                var i = { top: 0, left: 0 };
                if (t && t.getBoundingClientRect) {
                    var r = t.getBoundingClientRect();
                    i.top = r.top, i.left = r.left, e || (i.top += f.scrollTop(), i.left += f.scrollLeft())
                }
                return i
            }, i.addClass = function(t, e) { e && (t.classList ? t.classList.add(e) : t.className += " " + e) }, i.removeClass = function(t, e) { e && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")) }, i.css = function(t, e) {
                if (c.String(e)) return s(t)[a(e)];
                if (c.Array(e)) {
                    var i = {},
                        r = s(t);
                    return e.forEach(function(t, e) { i[t] = r[a(t)] }), i
                }
                for (var n in e) {
                    var o = e[n];
                    o == parseFloat(o) && (o += "px"), t.style[a(n)] = o
                }
            }, i
        }(window || {});
        return t
    }),
    function(t, e) { "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], e) : "object" == typeof exports ? (require("gsap"), e(require("scrollmagic"), TweenMax, TimelineMax)) : e(t.ScrollMagic || t.jQuery && t.jQuery.ScrollMagic, t.TweenMax || t.TweenLite, t.TimelineMax || t.TimelineLite) }(this, function(t, e, i) {
        "use strict";
        t.Scene.addOption("tweenChanges", !1, function(t) { return !!t }), t.Scene.extend(function() {
            var t, r = this;
            r.on("progress.plugin_gsap", function() { s() }), r.on("destroy.plugin_gsap", function(t) { r.removeTween(t.reset) });
            var s = function() {
                if (t) {
                    var e = r.progress(),
                        i = r.state();
                    t.repeat && -1 === t.repeat() ? "DURING" === i && t.paused() ? t.play() : "DURING" === i || t.paused() || t.pause() : e != t.progress() && (0 === r.duration() ? 0 < e ? t.play() : t.reverse() : r.tweenChanges() && t.tweenTo ? t.tweenTo(e * t.duration()) : t.progress(e).pause())
                }
            };
            r.setTween = function(n, a, o) {
                var l;
                1 < arguments.length && (arguments.length < 3 && (o = a, a = 1), n = e.to(n, a, o));
                try {
                    (l = i ? new i({ smoothChildTiming: !0 }).add(n) : n).pause()
                } catch (n) { return r }
                return t && r.removeTween(), t = l, n.repeat && -1 === n.repeat() && (t.repeat(-1), t.yoyo(n.yoyo())), s(), r
            }, r.removeTween = function(e) { return t && (e && t.progress(0).pause(), t.kill(), t = void 0), r }
        })
    });