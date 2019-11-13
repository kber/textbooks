# 圆和PI

## 引言

> section: introduction
> id: intro

::: column.grow

从古至今，人类一直在仰望浩渺的星空，希望通过恒星，行星和月球的运动规律来探索宇宙的运行规律

古希腊的天文学家首先发现所有的天体都沿着规律的轨迹运行， 这些轨迹被称为__轨道__。他们认为所有天体的轨道都是圆形的，因为圆在所有图形中是最完美的：
在任何方向上都是对称的，因此它是宇宙运行秩序的最佳选择

::: column(width=320)

    x-media(src="images/geocentric.jpg" width=320 height=272)

{.caption} 在 _托勒密宇宙体系_ 中，地球处于宇宙的中心

:::

---
> id: radius
> goals: compass

所有在 [__圆__](gloss:circle) 上的点到圆心的距离都是相等的。使用 [圆规](gloss:compass) 我们很轻松地就可以画出圆:

::: column(width=320)

    x-geopad(width=320 height=300 style="position: relative;")
      svg(style="stroke-linecap: round; stroke-linejoin: round")
        circle.move(name="a" cx=160 cy=150 target="r d")
        circle.move.reveal(name="b" cx=250 cy=240 project="circle(a, 120)" target="r" when="compass")
        path.red(x="segment(a,b).contract(0.08)" target="r" arrows="both" hidden)
        path(name="c1" x="arc(a,b,1.99*pi)" hidden)
        path.blue(x="segment(b.rotate(Math.PI/3,a),b.rotate(-2*Math.PI/3,a)).contract(0.01)" target="d" arrows="both" hidden)
        path.green(x="arc(a,b.add(b.subtract(a).normal.scale(12)),1.99*pi).contract(0.02)" target="c" arrows="start" hidden)
      x-play-btn

::: column.grow

{.reveal(when="compass")} 关于圆，有 3 个要点：

* {.reveal(when="compass" delay="1000")} [{.step-target.pill.b.red}半径](target:r)
  是指圆心到圆周的距离
* {.reveal(when="compass" delay="4000")} [{.step-target.pill.b.blue}直径](target:d)
  是指通过圆心到圆的边上两点间的距离，它的长度是半径的 [[两倍|一半|一样]] 
* {.reveal(when="blank-0")} [{.step-target.pill.b.green}周长](target:c) 
  是指绕圆形一周的距离.

:::

---
> id: similar
> goals: circle-0 circle-1 circle-2

圆还有一个很重的特性，所有的圆形都 [相似](gloss:similar) ，只需通过简单的 [平移](gloss:translation) 和 [伸缩](gloss:dilation) 就可以证明:

    figure: svg.similar-circles(width=640 height=380 viewBox="0 0 640 380")

---
> id: pi-definition
> goals: digits

在相似多边形中，对应边的比值总是一定的。对于圆来说也是成立的：_所有圆_ 的 [周长](gloss:circle-circumference) 和 [直径](gloss:circle-diameter) 的比值也是一定的，
而且始终为一个常数：3.14159…，我们称之为 [__Pi__](gloss:pi)，一般用希腊字母 _π_ 来表示，它是一个无限不循环小数：

    canvas.pi-spiral(width=800 height=760)

---
> id: wheel
> goals: unroll

下面有一个直径为 1 的车轮，让我们来展开圆的周长，你会发现它的长度等于 [[`pi`|`2 * pi`|3]] :

    figure: include svg/wheel.svg
    x-gesture(target="#wheel .wheel" slide="100,0")

---
> id: circumference

如果圆的直径为 _d_ ，那么它的周长为 `C = π × d`. 同理,
一个 [半径](gloss:circle-radius) 为 _r_ 的圆, 它的周长为

{.text-center} `C =` [[`2 π r`|`π r`|`π r^2`]].

---
> id: nature

圆是完全对称的，并且没有多边形的角等任何“弱点”。 这就是为什么它们在自然界中随处可见的原因之一: 

::: column(width=130 parent="padded-thin")

    x-media(src="images/flower.jpg" width=130 height=130)

{.caption} 花朵

::: column(width=130)

    x-media(src="images/earth.jpg" width=130 height=130)

{.caption} 地球

::: column(width=130)

    x-media(src="images/tree.jpg" width=130 height=130)

{.caption} 圆木

::: column(width=130)

    x-media(src="images/orange.jpg" width=130 height=130)

{.caption} 水果

::: column(width=130)

    x-media(src="images/soap.jpg" width=130 height=130)

{.caption} 肥皂泡

:::

{.r} 而且这样的例子从彩虹到水波纹无处不在，你还能想到其他的例子吗？[继续](btn:next)

---
> id: max-area
> goals: area-circle

::: column.grow

在周长一定的条件下，圆的面积是最大的。举个例子，用一条 100 米长的绳子来圈地，只有将绳子围成圆形（而不是正方形或者三角形）才能使圈地的面积最大

在自然界中，水滴或气泡可以通过变为圆形或者球形来 _保存能量_ ，并且可以减小它们的表面积。

::: column(width=320)

    x-select.area-tabs
      div(data-value="0") 三角形
      div(data-value="1") 正方形
      div(data-value="2") 五边形
      div(data-value="3") 圆形
    svg(width=320 height=200)

{.caption} _周长_ = __{.m-green}100__, _面积_ = __${area}__


:::

---
> id: area
> goals: slider

### 圆的面积

但是如何才能计算出圆的面积呢？我们可以使用和 [找出四边形的面积](/course/polyhedra/quadrilaterals) 一样的方法：
将图形分别切割成很多不同的部分，然后将他们重新拼接成一个我们已知面积计算方式的图形（比如：矩形或者三角形）

唯一的不同地方是，因为圆是弯曲的，因此我们必须做一些近似处理：

::: column(width=340)

    svg.circle-area.red(width=340 height=245)
      defs
        marker#area-arrow(refX=4 refY=4 markerWidth=5 markerHeight=8 orient="auto-start-reverse")
          path(d="M 1 1 L 4 4 L 1 7" stroke-width=1)
      g.labels
        line.reveal(x1=62 y1=158 x2=62 y2=212 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-1")
        line.reveal(x1=80 y1=226 x2=268 y2=226 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-2")
        text.reveal(x=50 y=190 when="blank-1") r
        text.reveal(x=165 y=241 when="blank-2") πr
    x-slider(steps=400)

::: column.grow

这里可以将圆分割成 ${n1} 个楔形，向右移动滑动条，将它们重新排列成一行。

{.reveal(when="slider")} 如果我们将分割的楔形的数量逐渐增加 ${n1}{n1|6|6,30,2},
你会发现重新排列后的图形越来越接近 [[矩形|圆形|正方形]].

{.reveal(when="blank-0")} 矩形的高等于圆的 [[半径|周长|直径]]。
_{span.reveal(when="blank-1")} 矩形的宽等于圆的 [[周长的一半|周长|直径]]_
_{span.reveal(when="blank-2")} (一半的楔形朝下，另一半朝上)_

{.reveal(when="blank-2" delay=1000)} 因此这个矩形的面积的近似值为 `A = π r^2`.

:::

---
> id: area-1
> goals: slider

::: column(width=340)

    svg.circle-area.blue(width=340 height=245)
      g.labels
        line.reveal(x1=20 y1=156 x2=20 y2=206 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-1")
        line.reveal(x1=34 y1=218 x2=355 y2=218 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-2")
        text.reveal(x=10 y=185 when="blank-1") r
        text.reveal(x=165 y=236 when="blank-2") 2πr
    x-slider(steps=400)

::: column.grow

我们还可以将圆分割成 ${n} 个圆环。跟刚才一样，向右移动滑动条，将所有的圆环拉直平铺。

{.reveal(when="slider")} 如果我们将分割的楔形数量逐渐增加 ${n2}{n2|4|2,12,1},
你会发现重新排列后的图形越来越接近 [[三角形|矩形|梯形]].

{.reveal(when="blank-0")} 三角形的高等于圆的 [[半径|直径|周长]] 。
_{span.reveal(when="blank-1")} 三角形的底等于圆的 [[周长|直径的两倍]]._
_{span.reveal(when="blank-2")} 因此三角形的面积近似等于_

{.text-center.reveal(when="blank-2")} `A = 1/2 "底" × "高" = π r^2`.

:::

---
> id: area-2

如果可以使用无限多个环或楔形，我们就能完美的计算出圆的面积-以上两种计算圆的面积方式得出了相同的面积计算公式：

{.text-center.r} `A = π r^2`.
[Continue](btn:next)

---
> id: pi-approximations

### 计算圆周率 Pi 的值

正如你所看到的，`π = 3.1415926…` 不是整数，而是一个无限不循环小数。这样的数字被称为
[__无理数__](gloss:irrational-numbers), 也就是说 `π` 不能表示成一个简单的分数的形式。

同时也意味着我们永远都无法写下 Pi 的所有的数字 - 毕竟它们有无穷的位数。
古希腊和古代中国的数学家通过正多边形将 Pi 的值计算到了小数点后 4 位。
注意他们是如何计算的，随着边数的增加，这些多边形看起来 [[越来越像|越来越不像|完全就是]] 一个圆：

    figure: x-media(src="images/polygons.svg" width=460 height=110)

---
> id: pi-record

::: column(width=280)

    x-media(src="images/iss.jpg" width=280 height=330 credit="NASA")

::: column.grow

1665 年，[牛顿](bio:newton) 将圆周率计算到了小数点后 15 位。 今天我们通过计算机可以计算出圆周率 Pi 小数点后更多的位数。

目前的记录是 31.4 万亿位。如果将它们全部印到一本书当中，那么这本书的厚度大约是 400 公里 - 这是 [国际空间站](gloss:iss) 环绕地球运行的高度

当然我们不用去记住 Pi 的所有数位。事实上，分数 `22/7 = 3.142…` 已经和 Pi 的值非常接近了。

:::

---
> id: pi-sequence

另一种计算 Pi 的方式是使用无穷级数。下面计算 Pi 的公式就是 [莱布尼茨](bio:leibniz) 在 1676 年发现的：

{.text-center} `π = 4/1 - 4/3 + 4/5 - 4/7 + 4/9 - 4/input(11) + …`

{.reveal(when="blank-0")} 只要我们遵循同样的模式，计算项越多，结果越接近 Pi 的值。

---
> id: pi-colours
> goals: hover

::: column.grow

数学家们认为 Pi 让人更加好奇的是：它是一个 __正常数__ 。也就是说，这些从 0 到 9 的数字似乎是完全随机的，
就好像 Pi 的值完全是大自然通过无数次掷一个 10 面骰子掷出来的。

这里我们可以看到 Pi 的前 100 位。鼠标移动到这些单元格上，看看数字是如何分布的。

::: column(width=330)

    .pi-grid
      .pi-left
        .pi-cell 3
        .pi-operator .
      .pi-mid
        for d in '1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'.split('')
          .pi-cell= d
      .pi-right: .pi-operator …

:::

---
> id: pi-digits
> goals: search

如果 Pi 是正常的，就意味着你能想到的 _任意_ 字符数串都可能出现在其中。
这里你可以查找 Pi 值的前 100 万位 - 包含了你的生日吗？

    .box
      .box-title: h3 Pi 的前 100 万位数字
      .box-body.pi-controls
        | 输入查找的数字:
        input(type="text" pattern="[0-9]*" maxlength=12)
        .pi-warning
      x-pi-scroll.box-body
        .first-row 3.

---
> id: pi-movies

我们甚至可以将一整本书，比如《哈利·波特》，转换为一长串数字（a = 01，b = 02，等等）。
如果 Pi 是正常数，那么这一串数字一定会出现在 Pi 的数位中 - 只是很可能会需要花上百万年去计算出足够的位数并找到它。

Pi 容易理解，但却在科学和数学领域具有最基础的重要性。这可能也是为什么 Pi 在我们的文化中异常流行的原因（至少与其他数学主题相比）:

::: column(width=220 parent="padded-thin")

    x-video(src="images/museum.mp4" poster="images/museum.jpg" width=220 height=140 audio credit="© 20th Century Fox")
    p.caption 在电影 “博物馆惊魂夜2” 中，Pi 是书写板的密码.

::: column(width=220)

    x-video(src="images/simpsons.mp4" poster="images/simpsons.jpg" width=220 height=140 audio credit="© Fox")
    p.caption 在“辛普森一家”中，弗林克宣称 `pi` 等于 3 ，让满屋子的科学家瞬间安静

::: column(width=220)

    x-video(src="images/star-trek.mp4" poster="images/star-trek.jpg" width=220 height=140 audio credit="© NBC")
    p.caption 史波克 (“星际迷航”) 通过让其计算 `pi` 的最后一位成功地关闭了一台邪恶的电脑

:::

---
> id: pi-day

__圆周率日__ 是一年一度庆祝数学常数 `pi` 的日子 ，日期是每年的 3 月 14 日，因为 `pi ≈ 3.14`，也有另一种说法是 7 月 22 日—`pi ≈ 22/7`

    figure: x-media(src="images/pies.jpg" width=500 height=150 credit="Evan Shelhamer, Matman from Lublin")



--------------------------------------------------------------------------------



## 度和弧度

> section: radians
> id: degrees

在几何中，我们通常使用 [度](gloss:degrees) 作为角的度量单位。
旋转一个 __{.m-red}整圆__ 的度数是 [[360]]°, 旋转一个 __{.m-green}半圆__ 的度数是
[[180]]°, 旋转一个 __{.m-yellow}四分之一圆__ 的度数是 [[90]]°, 以此类推。

::: column(width=160)

    x-geopad(width=160 height=160): svg
      circle(x="point(150,80)" name="a0" hidden)
      circle(x="point(80,80)" name="b0")
      circle(x="c0" hidden)
      path.red.fill(x="angle(c0,b0,a0)" round size=40)
      path(x="segment(a0,b0)")
      path(x="segment(b0,c0)")

::: column(width=160)

    x-geopad(width=160 height=160): svg
      circle(x="point(150,80)" name="a1" hidden)
      circle(x="point(80,80)" name="b1")
      circle(x="c1" hidden)
      path.green.fill(x="angle(c1,b1,a1)" round size=40)
      path(x="segment(a1,b1)")
      path(x="segment(b1,c1)")

::: column(width=160)

    x-geopad(width=160 height=160): svg
      circle(x="point(150,80)" name="a2" hidden)
      circle(x="point(80,80)" name="b2")
      circle(x="c2" hidden)
      path.yellow.fill(x="angle(c2,b2,a2)" round size=40)
      path(x="segment(a2,b2)")
      path(x="segment(b2,c2)")

:::

---
> id: degrees-1

{.r} 之所是 360 度是因为它容易被整除：2, 3, 4, 5, 6, 8, 9, 10, 12, 15等等。这意味着
很多特殊的角度都是整数。但是，难道你就不想知道数字 360 的起源？[继续](btn:next)

---
> id: babylon

::: column.grow
无独有偶，360 度是我们今天仍在使用的最古老的数学概念之一。
它起源并发展与于 5000 年前的古巴比伦！

当时，天文学是数学最重要的应用领域之一。
太阳的运动规律决定了四个季节的更替，农民们可以知道何时进行耕种。同样的，月亮决定了潮汐的涨落，而这对于渔民非常重要。
人们还研究星象用以预测未来，或沟通众神。

::: column(width=260)

    x-media(src="images/babylon.jpg" width=260 height=250 credit="Yale University")

{.caption} 用来计算 `sqrt(2)` 的古巴比伦石板

:::

---
> id: constellations
> goals: rotate

古代天文学家还注意到，在夜晚的特定时间可见的星座每天都发生微小的变化，直到大约 360 天后，他们才回到原来的位置。
这或许就是他们将圆分成 360 度的原因。

    figure: .constellations
      .label.md Midnight on day ${day}
      .bg
      .wheel: svg(width=760 height=760 viewBox="0 0 760 760")
      .fg
    x-gesture(target=".constellations" offset="0,-120", slide="-160,0")

---
> id: constellations-1
> goals: video

当然，实际上一年有 365 天（准确的说是 365.242199），但是令人叹为观止的是，
古巴比伦的数学家们仅仅使用了最简单的日晷就测量出了这个结果！
它也可以很好地兼容古巴比伦已经在使用的基于六十的进制系统（因为 `6 xx 60 = 360`）
这也是为什么今天其它所有的度量单位都是基于 [十进制](gloss:base-10)（例如：1个年代 = 10 年，1个世纪 = 100 年），
但是这个系统仍然在使用 1 小时 = 60 分钟，1 分钟 = 60 秒的原因

::: column.grow
对于大多数人来说，已经习惯使用度为单位来描述角度：比如360°视频、滑板手转体540°，还比如某人的态度做了180°的大转弯。

但是，从数学的角度来说，选择 360 完全没有任何道理的。否则，如果在火星，圆可能是670°，而在木星，一年则有 10,475 天。

::: column(width=280)

    x-video(src="images/skateboard.mp4" poster="images/skateboard.jpg" width=280 height=200 credit="© RIDE Channel, from YouTube")

{.caption} 麦克翻转, 旋转540° 

:::

---
> id: radians

### 弧度
数学家们更喜欢使用 [__单位圆__](gloss:unit-circle)（半径为1的圆） 的 [周长](gloss:circle-circumference) 来度量角度，
而不是将圆进行分割圆的方式（比如分割为360份）

::: column(width=280)

    x-geopad(width=280 height=280): svg
      circle(x="point(140,140)" name="c")
      path.thin(x="circle(c,100)" name="circ")
      circle.move.blue.pulsate(cx=240 cy=140 name="a" project="circ")
      circle.move.green(cx=240 cy=140.4 name="b" project="circ")
      path.fill.green(x="angle(b,c,a)" label="${round(ang.deg)}°" name="ang" round)
      path.red.thick(x="arc(c,b,ang.rad)" label="${rad(ang.rad)}π")
      path.thin(x="segment(c,a)")
      path.thin(x="segment(c,b)")

::: column.grow

_{span.var-action}绕圆一周_ 的长度为
_{x-equation.small(solution="2 π" keys="+ × π" numeric)}_.

{.reveal(when="eqn-0")} 如果 _{span.var-action}绕圆半周_, 相应绕圆周的距离为
_{x-equation.small(solution="π" keys="+ × π" numeric)}_.

{.reveal(when="eqn-1")} For a _{span.var-action}绕圆四分之一圆周_, 相应绕圆周的距离为
_{x-equation.small(solution="π/2" keys="+ × π frac" numeric)}_.

{.reveal(when="eqn-2")} 以此类推: 这种度量角度的方式
[__弧度__](gloss:radians) (也可以称这种方式为 “半径单位”).

:::

---
> id: radians-conversion

每一个使用角度为单位的角都可以使用对应的弧度来表示。它们之间的转换非常简单 - 
就像千米和米、摄氏度和华氏度等其他单位之间进行转换一样：

{.text-center} __{.m-red} 360°__ _{span.space}=_ __{.m-green} 2*π* rad__

::: column(width=180 parent="padded-thin")

{.text-center} _{span.rotate.left}`=>`_  
__{.m-red} 1°__ _{span.space}=_ [[`pi/180`|`180pi`|`360/pi`]] __{.m-green} rad__

::: column(width=180)

{.text-center} _{span.rotate.right}`=>`_  
__{.m-green} 1 rad__ _{span.space}=_ [[`180/pi`|`180-pi`|`2pi-360`]] __{.m-red} °__

:::

---
> id: radians-table

弧度表示为 _π_ 的倍数的形式，也可以表示为数字。你能完成下面表格中弧度和角度的转换吗？

| __{.m-red}角度__ | 0 | 60 | _{x-equation.small(solution="360/π" keys="π frac" numeric)}_ | 180 | _{x-equation.small(solution="270" keys="π frac" numeric)}_    |
| __{.m-green}弧度__   | 0 | _{x-equation.small(solution="π/3" keys="π frac" numeric)}_ | 2    | _{x-equation.small(solution="π" keys="π frac" numeric)}_ | `3/2 pi` |
{.table-small.grid}

---
> id: radians-distance

### 路程

弧度可以视为沿着单位圆圆周的“路程”。这在处理在圆周运动的对象时特别有用。

::: column.grow

比如, [国际空间站](gloss:iss) 每 1.5\ 小时绕地球一周。
这样意味着它的 __绕行速度__ 是 [[`(2 pi)/1.5`|
`1.5/(2 pi)`|`1.5 * pi`]] 弧度/小时.

{.reveal(when="blank-0")} 在[单位圆](gloss:unit-circle)中, 
旋转的速度和 _实际_ 速度是一致的, 因为圆周的长度等于旋转一圈的弧度数 (两者都是 `2pi`).

{.reveal(when="blank-0" delay=1000)} 国际空间站轨道的半径为 6800\ 公里,
也就是说国际空间站的 _实际_ 速度为 [[`(2 pi)/1.5 xx 6800`|
`(2 pi)/1.5 ÷ 6800`|`6800/(2 * pi)`]] _{span.reveal(when="blank-1")}= 28483 公里/小时._

::: column(width=300)

    x-geopad.r(width=300 height=300)
      .earth
      svg.r
        circle(x="point(150,150)" name="c")
        circle(x="point(280,150)" name="a")
        circle(x="a.rotate(p*2*pi,c)" name="b" hidden)
        path.red(x="arc(c,a,p*2*pi)")
        path.fill(x="angle(a,c,b)" label="${round(2*p,1)}π" round)
        path.red(x="segment(c,a)")
        path.red(x="segment(c,b)")
      .var.iss(style="transform: translate(${a.rotate(p*2*pi,c).x}px,${a.rotate(p*2*pi,c).y}px) rotate(${(p+0.25)*2*pi}rad)")
      .time.var ${round(p*1.5,1)}h
      x-play-btn

:::

---
> id: radians-distance-1

看到了吧，在上面的例子中，弧度是不是比度更方便很多呢？ 一旦知道旋转速度，我们只需要乘以半径即可得出实际速度。

再来看这个计算转速的例子: 如果汽车行驶速度为 20\ m/s, 轮胎的半径是 0.25\ m. 那么轮胎的转速就是 [[`20/0.25 =
80`|`20 xx 0.25 = 5`|`0.25/50 = 0.0125`]] 弧度/秒
_{span.reveal(when="blank-0")}(或者 `80/(2pi) = 13` 转/秒)._

---
> id: radians-trig

### 三角函数

对于大多数简单的几何问题，度和弧度是可以互换的 - 你可以任意选择使用其中任意一个

For most simple geometry problems, degrees and radians are completely
interchangeable – you can either pick which one you prefer, or a question
might tell you which unit to give your answer in. However, once you study
more advanced [trigonometry](gloss:trigonometry) or [calculus](gloss:calculus),
it turns out that radians are much more convenient than degrees.

::: column.grow

Most calculators have a [special button](->.button.mode) to switch between
degrees and radians. Trigonometric functions like [__sin__](gloss:sin),
[__cos__](gloss:cos) and __tan__ take angles as input, and their inverse
functions __arcsin__, __arccos__ and __arctan__ return angles as output. The
current calculator setting determines which units are used for these angles.

Try using this calculator to calculate that

{.text-center} sin(30°) = [[0.5]] _{span.eqn-gap}_ cos(1°) = [[0.999]]<br>
sin(30 rad) = [[-0.988]] _{span.eqn-gap}_ cos(1 rad) = [[0.54]]

::: column(width=300)

    .calculator
      .display
        span
        .setting DEG
      .button.num 7
      .button.num 8
      .button.num 9
      .button.wide sin
      .button.num 4
      .button.num 5
      .button.num 6
      .button.wide cos
      .button.num 1
      .button.num 2
      .button.num 3
      .button.wide tan
      .button.num 0
      .button .
      .button C
      .button.wide.mode mode

:::

---
> id: small-angle

Using radians has one particularly interesting advantage when using the [__Sine
function__](gloss:sin). If `θ` is a very small angle (less than 20° or 0.3 rad),
then `sin(θ) ≈ θ`. For example,

{.text-center} sin(${x}{x|0.1|0,0.5,0.05}) `≈` ${sin(x)}…

{.reveal(when="var-0")} This is called the __small angle approximation__, and it
can greatly simplify certain equations containing trigonometric functions.
You’ll learn much more about this in the future.



--------------------------------------------------------------------------------



## Tangents, Chords and Arcs

> section: tangets-chords-arcs
> id: circle-parts

In the previous sections, you learned the names given to several different
parts of a circle – like the center, radius, diameter and circumference.
However, there are many geometric elements related to a circle, which we’ll
need to solve more complex problems:

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg
      circle(x="point(150,150)" name="x")
      
      path.teal.fill.reveal(x="sector(x,d1,Math.PI/2.5)" target="sector" when="next-3" label="Sector" label-colour="white")
      path.purple.fill.reveal(x="arc(x,b1,Math.PI/2.5)" target="segment" when="next-4" label="Segment")
      
      path.black(x="circle(x,100)" name="c")
      
      circle.red(x="c.at(0.5)" name="a1" target="secant")
      circle.red(x="c.at(0.7)" name="a2" target="secant")
      path.red.thick(x="line(a1,a2)" label="Secant" target="secant")
      
      circle.green.reveal(x="c.at(0.8)" name="b1" target="chord" when="next-0" animation="pop")
      circle.green.reveal(x="c.at(0)" name="b2" target="chord" when="next-0" animation="pop")
      path.green.thick.reveal(x="segment(b1,b2)" label="Chord" target="chord" when="next-0" animation="draw")
      
      circle.blue.reveal(x="c.at(0.1)" name="c1" target="tangent" when="next-1" animation="pop")
      path.blue.thick.reveal(x="c.tangentAt(0.1)" label="Tangent" target="tangent" when="next-1" animation="draw")
      
      circle.yellow.reveal(x="c.at(0.2)" name="d1" target="arc" when="next-2" animation="pop")
      circle.yellow.reveal(x="c.at(0.4)" name="d2" target="arc" when="next-2" animation="pop")
      path.yellow.thick.reveal(x="arc(x,d1,Math.PI/2.5)" label="Arc" target="arc" when="next-2" animation="draw")

::: column.grow(parent="right")

* {.r} A [{.red} secant](pill:secant) is a line that intersects a circle in two
  points. [Continue](btn:next)
* {.r.reveal(when="next-0")} A [{.green} chord](pill:chord) is a line segment
  whose endpoints lie on the circumference of a circle. [Continue](btn:next)
* {.r.reveal(when="next-1")} A [{.blue} tangent](pill:tangent) is a line that
  touched a circle at exactly one point. This is called the __point of
  tangency__. [Continue](btn:next)
* {.r.reveal(when="next-2")} An [{.yellow} arc](pill:arc) is a section of the
  circumference of a circle. [Continue](btn:next)
* {.r.reveal(when="next-3")} A [{.teal} sector](pill:sector) is a part of the
  interior of a circle, bounded by an _arc_ and _two radii_.
  [Continue](btn:next)
* {.r.reveal(when="next-4")} Finally, a [{.purple} segment](pill:segment) is a
  part of the interior of a circle, bounded by an _arc_ and _a chord_.
  [Continue](btn:next)

:::

---
> id: circle-parts-1

In this section, we will look at the relationship between all these elements,
and prove theorems about their properties. Don't worry about memorising all the
definitions for now – you can always use the
[glossary](->.footer-link[data-modal=glossarym]).

---

### Tangents

{.todo} COMING SOON!

    // https://www.mathopenref.com/tangentline.html
    // https://www.mathopenref.com/consttangents.html
    // https://www.mathopenref.com/consttangent.html

    // __[CC] Construct a tangent line from a point outside a given circle to the circle.__
    // 
    // Point of Tangency: The point where a tangent line touches the circle.
    // 
    // The tangent line and the radius drawn to the point of tangency have a unique
    // relationship. Let’s investigate it here.
    // 
    // _Tangent to a Circle Theorem_: A line is tangent to a circle if and only if the
    // line is perpendicular to the radius drawn to the point of tangency.
    // 
    // To prove this theorem, the easiest way to do so is indirectly (proof by
    // contradiction). Also, notice that this theorem uses the words “if and only if,”
    // making it a biconditional statement. Therefore, the converse of this theorem is
    // also true. Now let’s look at two tangent segments, drawn from the same external
    // point. If we were to measure these two segments, we would find that they are equal.
    // 
    // _Two Tangents Theorem_: If two tangent segments are drawn from the same external
    // point, then the segments are equal.
    //
    // Tangents are actually a much more universal concept,
    // Tangent Circles: Two or more circles that intersect at one point.
    // Two circles can be tangent to each other in two different ways, either
    // internally tangent or externally tangent.

---

### Chords

{.todo} COMING SOON!

    // A chord is a line segment whose endpoints are on a circle. A diameter is the
    // longest chord in a circle. There are several theorems that explore the
    // properties of chords.
    // 
    // Chord Theorem #1: In the same circle or congruent circles, minor arcs are
    // congruent if and only if their corresponding chords are congruent.
    // 
    // Notice the “if and only if” in the middle of the theorem. This means that Chord
    // Theorem #1 is a biconditional statement. Taking this theorem one step further,
    // any time two central angles are congruent, the chords and arcs from the
    // endpoints of the sides of the central angles are also congruent. In both of
    // these pictures, BE≅CD and BEˆ≅CDˆ. In the second picture, we have △BAE≅△CAD
    // because the central angles are congruent and BA≅AC≅AD≅AE because they are all
    // radii (SAS). By CPCTC, BE≅CD.
    // 
    // Investigation: Perpendicular Bisector of a Chord
    // 1. Draw a circle. Label the center A. 
    // 2. Draw a chord in ⨀A. Label it BC.
    // 3. Find the midpoint of BC by using a ruler. Label it D. 
    // 4. Connect A and D to form a diameter. How does AD relate to the chord, BC? 
    // 
    // Chord Theorem #2: The perpendicular bisector of a chord is also a diameter.
    // In the picture to the left, AD⊥BC and BD≅DC. From this theorem, we also notice
    // that AD also bisects the corresponding arc at E, so BEˆ≅ECˆ.
    // 
    // Chord Theorem #3: If a diameter is perpendicular to a chord, then the diameter
    // bisects the chord and its corresponding arc.
    // 
    // Investigation: Properties of Congruent Chords
    // 1. Draw a circle with a radius of 2 inches and two chords that are both 3
    //    inches. Label as in the picture to the right. This diagram is drawn to scale. 
    // 2. From the center, draw the perpendicular segment to AB and CD.
    // 3. Erase the arc marks and lines beyond the points of intersection, leaving FE
    //    and E. Find the measure of these segments. What do you notice? 
    // 
    // Chord Theorem #4: In the same circle or congruent circles, two chords are
    // congruent if and only if they are equidistant from the center.
    // 
    // Recall that two lines are equidistant from the same point if and only if the
    // shortest distance from the point to the line is congruent. The shortest distance
    // from any point to a line is the perpendicular line between them. In this
    // theorem, the fact that FE=EG means that AB and CD are equidistant to the center
    // and AB≅CD.

    // Concentric Circles: Two or more circles that have the same center, but different radii.
    // Congruent Circles: Two or more circles with the same radius, but different centers.

---
> id: earth-arc

### Arcs and Sectors

::: column.grow

Most scientists in ancient Greece agreed that the Earth is a sphere. There was
plenty of evidence: from ships disappearing behind the horizon at sea, to the
circular motion of stars during the night.

Unfortunately, no one knew exactly _how big_ Earth was – until around 200 BC,
when the mathematician [Eratosthenes](bio:eratosthenes) found an ingenious way
to measure Earth’s radius, using basic geometry. All we need is a bit more
knowledge about arcs and sectors of a circle.

::: column(width=280)

    x-solid(size=280 rotate="0.5")

:::

---
> id: arcs

::: column(width=280)

    x-geopad.sticky(width=280 height=280): svg
      circle(x="point(140,140)" name="c")
      path(x="circle(c,100)" name="circ")
      circle.move(cx=240 cy=140 name="a" project="circ" label="A")
      circle.move(cx=85 cy=60 name="b" project="circ" label="B")
      
      path.yellow.fill(x="sector(c,b,angle(b,c,a).rad).minor" label="Sector" target="sector" label-colour="white")
      path.red.thick(x="arc(c,b,angle(b,c,a).rad).minor" label="Arc" target="arc")
      path.purple.thick.transparent(x="arc(c,a,2*pi-angle(b,c,a).rad).major" target="major")

::: column.grow

As you can see in the diagram, an [{.red} arc](pill:arc) is a part of the
[[circumference|diameter|tangent]] of a circle, and a [{.yellow} sector](pill:sector)
is a part of the [[interior|radius|perimeter]] of a circle.

::: .reveal(when="blank-0 blank-1")
The arc between two points _A_ and _B_ is often written as `arc(AB)`. This
definition is slightly ambiguous: there is a [{.purple} second arc](pill:major)
that connects _A_ and _B_ but goes the other way around the circle.

The smaller of the two arcs is called the __minor arc__, and the larger one is
called the __major arc__. If points _A_ and _B_ are exactly opposite each other,
both arcs have the same length and are [[semicircles|diameters|circumferences]].
:::

:::

---
> id: arcs-1

::: column.grow

To find the length of an arc or the area of a sector, we need to know about the
corresponding angle at the center of the circle: this is called the
[{.blue} central angle](pill:angle).

Notice how the arc, sector and angle all take up the _same proportion_ of a
full circle. For example, if the [{.blue} central angle](pill:angle) is
_{span.var-action}90°_, it takes up [[one quarter|one half|one third]] of a
[{.teal} full circle](pill:fangle).

::: .reveal(when="blank-0")
This means that the [{.red} length of the arc](pill:arc) is also `1/4` of the
[{.purple} whole circumference](pill:circ) of the circle, and the [{.yellow} area
of the sector](pill:sector) is `1/4` of the [{.orange} whole area](pill:area) of
the circle.

We can express this relationship in an equation:

{.text-center} `"arc length" / "circumference" = blank("sector area","circle radius","arc area") / "circle area" = "central angle" / blank("360°","180°","90°")`
:::

::: column(width=280)

    x-geopad.sticky(width=280 height=280): svg
      circle(x="point(140,140)" name="c")
      path(x="circle(c,100)" name="circ")
      circle.move(cx=240 cy=140 name="a" project="circ")
      circle.move(cx=85 cy=60 name="b" project="circ")
      
      path.yellow.fill(x="sector(c,b,angle(b,c,a).rad)" label="Sector" target="sector" label-colour="white")
      path.red.thick(x="arc(c,b,angle(b,c,a).rad)" label="Arc" target="arc")
      path.fill.blue(x="angle(b,c,a)" target="angle")
      
      path.fill.orange.transparent(x="circ" target="area")
      path.thick.purple.transparent(x="circ" target="circ")
      path.teal.fill.transparent(x="circle(c,32)" target="fangle")

:::

---
> id: arcs-2

Now we can rearrange these equations to find whichever variable we’re interested
in. For example,

::: column(width=320 parent="padded-thin")

| [{.red}arc length](pill) | = | `"circumference" × c/360` |
|                          | = | `2 π r × c/360`          |
{.eqn-system}

::: column(width=320)

| [{.yellow}sector area](pill) | = | `"circle area" × c/360` |
|                              | = | `π r^2 × c/360`         |
{.eqn-system}

:::

where _r_ is the radius of the circle, and _c_ is the size of the central
angle.

    // What the formulae are doing is taking the area of the whole circle, and
    // then taking a fraction of that depending on what fraction of the circle
    // the sector fills.

    // The length of an arc is the distance along the curved line of the
    // circumference of the circle. It is slightly longer than the straight
    // line connecting the same two points (the chord).

---
> id: arcs-rad

If the central angle is measured in [radians](gloss:radians) rather than
[degrees](gloss:degrees), we can use the same equations, but have to replace
360° with [[`2 π`|`1/2 π`|`π`]]:

::: .reveal(when="blank-0")
::: column(width=320 parent="padded-thin")

| [{.red}arc length](pill) | = | `2 π r × c/(2π)` |
|                          | = | `r × c`          |
{.eqn-system}

::: column(width=320)

| [{.yellow}sector area](pill) | = | `π r^2 × c/(2π)` |
|                              | = | `1/2 r^2 c`      |
{.eqn-system}

:::

Notice how the equations become much simpler, and _π_ cancels out everywhere.
This is because, as you might recall, the [definition of
radians](/course/circles/radians#radians) is basically the length of an
arc in a circle with radius 1.

Now let’s see how we can use arcs and sectors to calculate the circumference of
the Earth. [Continue](btn:next)
:::

---
> id: eratosthenes

In ancient Egypt, the city of _Swenet_ was located along the Nile river. Swenet was
famous for a well with a curious property: there was one moment every year when
the sunlight reached the very bottom of the well – at noon on 21 June, the day
of the _summer solstice_. At that precise time, the bottom of the well was
illuminated, but not its sides, meaning that the Sun was standing directly above
the well.

::: column(width=300)

    x-media(src="images/egypt-map.jpg" width=300 height=300 lightbox credit="© Google Maps")

{.caption} Ancient Egyptians measured long distances by counting the number of
steps it took to walk.

::: column(width=300)

    x-media(src="images/well.jpg" width=300 height=300 lightbox)

{.caption} Some sources say the “Well of Eratosthenes” was on _Elephantine
island_ on the Nile river.

:::

The mathematician [Eratosthenes](bio:eratosthenes) lived in _Alexandria_, about
800\ km North of Swenet, where he was director of the Great Library. In the city
centre of Alexandria stood an obelisk, a tall, narrow monument with a
pyramid-shaped top.

Eratosthenes noticed that at noon on the day of the summer solstice, the obelisk
was throwing a shadow – meaning that the sun was _not_ directly above it. He
deduced that this was because of the curvature of the Earth, and realised it
could be used to calculate our planet’s circumference.

---
> id: eratosthenes-1

::: column.grow

{.r} Here you can see the well in Swenet as well as the obelisk in Alexandria.
The sun rays fall directly into the well, but hit the obelisk at an angle and
cast a shadow. [Continue](btn:next)

::: .reveal(when="next-0")
Eratosthenes measured that the [{.teal} angle](pill:angle1) of the shadow was
7.2°. This is the same as the [{.purple} central angle](pill:angle2) of the
[{.red} arc](pill:arc) from Alexandria to Swenet, because they are
[[alternating|vertical|corresponding]] angles.
:::

::: .reveal(when="blank-0")
Now we can use the equation for arc length that we derived above:

{.text-center} `pill("arc length","red","arc") / pill("circumference","blue","circ") = (input(7.2)"°") / "360°"`
:::

::: .reveal(when="blank-1")
If we rearrange this, we find that the circumference of the Earth is

{.text-center} `pill("circumference","blue","circ") = "360°" / "7.2°" × pill("800 km","red","arc") = input(40000) "km"`
:::

::: .reveal(when="blank-2")
Finally, we know that the circumference of a circle is `C = 2 pi r`, so the
radius of Earth is

{.text-center} `r_"Earth" = (40000 "km") / (2 pi) ≈ 6400 "km"`.
:::

::: column(width=300)

    x-geopad.sticky(width=300 height=400)
      img.sunrays(src="images/sunlight.png" width=300 height=400)
      svg.r
        defs: radialGradient#grad1(cx=200 cy=200 r=200 gradientUnits="userSpaceOnUse")
          stop(offset=0 stop-color="#63a3ff")
          stop(offset=1 stop-color="#0f82f2")
      
        circle(x="point(150,250)" name="c" hidden)
        circle(x="point(150,120)" name="a" hidden)
        circle.move.pulsate(cx=80 cy=140 name="b" project="arc(c,point(64,155),1.47)")
        circle(x="c.add(b.subtract(c).scale(1.465))" name="d" hidden)
    
        path.shadow(x="triangle(c,d,point(d.x,c.y))")
        path.earth(d="M153,120,152,150h-4l-.95-30a130,130,0,1,0,5.9,0Z" fill="url(#grad1)")
        path.earth-cover.fill(x="circle(c,130)")
        
        path.red.thick.reveal(when="next-0" animation="draw" x="arc(c,b,angle(b,c,a).rad).minor" target="arc")
        path.fill.teal.reveal(when="next-0" x="angle(c,d,point(d.x,c.y)).sup" target="angle1")
        path.fill.purple.reveal(when="next-0" x="angle(b,c,a).sup" name="ang" target="angle2")
        path.thin.white.reveal(when="next-0" animation="draw" x="segment(c,b)")
        path.blue.transparent(x="circle(c,130)" target="circ")
        
        image.obelisk.var(xlink:href="images/obelisk.svg" height=60 width=8 x-x="${b.x-4}" x-y="${b.y-60}" style="transform: rotate(-${angle(b,c,a).rad}rad)")

:::

---
> id: eratosthenes-2

Eratosthenes’ measurement was one of the most important experiments in
antiquity. His estimate of Earth’s size was surprisingly accurate, especially
when considering that he only had access to very basic measuring tools.

::: column(width=280)

    x-media(src="images/obelisk.jpg" width=280 height=450 lightbox)

::: column.grow

Of course, it can be difficult to translate his original results into modern
units like kilometres. In ancient Greece, distance was measured in _stadia_
(approximately 160 m), but there was no universal standard. Every area had a
slightly different version, and we don’t know which one Eratosthenes used.

In the following centuries, scientists tried to use other methods to calculate
the radius of Earth – sometimes with very different, and incorrect results.

It was one of these incorrect measurements that prompted Christopher Columbus to
sail west from Portugal. He assumed that Earth was much smaller than it actually
is, and hoped to reach India. In fact, he arrived at a different continent in
between: the Americas.

:::

---

### Segments

{.todo} COMING SOON!

    // The last part of a circle that we can find the area of is called a segment, not
    // to be confused with a line segment. A segment of a circle is the area of a
    // circle that is bounded by a chord and the arc with the same endpoints as the
    // chord. The area of a segment is Asegment=Asector−A△ABC



--------------------------------------------------------------------------------



## The Circle Theorems

> section: circle-theorems
> sectionStatus: dev

https://www.mathsisfun.com/geometry/circle-theorems.html
https://mathsmadeeasy.co.uk/gcse-maths-revision/circle-theorems-gcse-revision-and-worksheets/
http://amsi.org.au/teacher_modules/Circle_Geometry.html

__[CC] Identify and describe relationships among inscribed angles, radii, and
chords. Include the relationship between central, inscribed, and circumscribed
angles; inscribed angles on a diameter are right angles; the radius of a circle
is perpendicular to the tangent where the radius intersects the circle.__

An inscribed angle is an angle with its vertex is the circle and its sides
contain chords. The intercepted arc is the arc that is on the interior of the
inscribed angle and whose endpoints are on the angle. The vertex of an inscribed
angle can be anywhere on the circle as long as its sides intersect the circle to
form an intercepted arc.

__Inscribed Angle Theorem__
The measure of an inscribed angle is half the measure of its intercepted arc.
To prove the Inscribed Angle Theorem, you would need to split it up into three
cases, like the three different angles drawn from the Investigation.

__Congruent Inscribed Angle Theorem__
Inscribed angles that intercept the same arc are congruent.

__Inscribed Angle Semicircle Theorem__
An angle that intercepts a semicircle is a right angle.

In the Inscribed Angle Semicircle Theorem we could also say that the angle is
inscribed in a semicircle. Anytime a right angle is inscribed in a circle, the
endpoints of the angle are the endpoints of a diameter. Therefore, the converse
of the Inscribed Angle Semicircle Theorem is also true.

When an angle is on a circle, the vertex is on the circumference of the circle.
One type of angle on a circle is one formed by a tangent and a chord.

__Chord/Tangent Angle Theorem__
The measure of an angle formed by a chord and a tangent that intersect on the
circle is half the measure of the intercepted arc.

From the Chord/Tangent Angle Theorem, we now know that there are two types of
angles that are half the measure of the intercepted arc; an inscribed angle and
an angle formed by a chord and a tangent. Therefore, any angle with its vertex
on a circle will be half the measure of the intercepted arc.

An angle is considered inside a circle when the vertex is somewhere inside the
circle, but not on the center. All angles inside a circle are formed by two
intersecting chords.

__Intersecting Chords Angle Theorem__
The measure of the angle formed by two chords that intersect inside a circle is
the average of the measure of the intercepted arcs.

An angle is considered to be outside a circle if the vertex of the angle is
outside the circle and the sides are tangents or secants. There are three types
of angles that are outside a circle: an angle formed by two tangents, an angle
formed by a tangent and a secant, and an angle formed by two secants. Just like
an angle inside or on a circle, an angle outside a circle has a specific
formula, involving the intercepted arcs.

__Outside Angle Theorem__
The measure of an angle formed by two secants, two tangents, or a secant and a
tangent drawn from a point outside the circle is equal to half the difference
of the measures of the intercepted arcs.

When two chords intersect inside a circle, the two triangles they create are
similar, making the sides of each triangle in proportion with each other. If we
remove AD and BC the ratios between AE, EC, DE, and EB will still be the same.

__Intersecting Chords Theorem__
If two chords intersect inside a circle so that one is divided into segments of
length a and b and the other into segments of length c and d then ab=cd. In
other words, the product of the segments of one chord is equal to the product
of segments of the second chord.

In addition to forming an angle outside of a circle, the circle can divide the
secants into segments that are proportional with each other.

If we draw in the intersecting chords, we will have two similar triangles.

From the inscribed angles and the Reflexive Property (∠R≅∠R),△PRS∼△TRQ. Because
the two triangles are similar, we can set up a proportion between the
corresponding sides. Then, cross-multiply. ac+d=ca+b⇒a(a+b)=c(c+d)

__Two Secants Segments Theorem__
If two secants are drawn from a common point outside a circle and the segments
are labeled as above, then a(a+b)=c(c+d). In other words, the product of the
outer segment and the whole of one secant is equal to the product of the outer
segment and the whole of the other secant.

If a tangent and secant meet at a common point outside a circle, the segments
created have a similar relationship to that of two secant rays. Recall that the
product of the outer portion of a secant and the whole is equal to the same of
the other secant. If one of these segments is a tangent, it will still be the
product of the outer portion and the whole. However, for a tangent line, the
outer portion and the whole are equal.

__Tangent Secant Segment Theorem__
If a tangent and a secant are drawn from a common point outside the circle (and
the segments are labeled like the picture to the left), then a2=b(b+c). This
means that the product of the outside segment of the secant and the whole is
equal to the square of the tangent segment.

---

### Thales' Theorem

Proof using isosceles triangles

Combines all of Euclidean Geometry

{.todo} TODO



--------------------------------------------------------------------------------



## Cyclic Polygons

> sectionStatus: dev
> section: cyclic-polygons

__[CC] Construct an equilateral triangle, a square, and a regular hexagon
inscribed in a circle.__

An inscribed polygon is a polygon where every vertex is on a circle. Note, that
not every quadrilateral or polygon can be inscribed in a circle. Inscribed
quadrilaterals are also called cyclic quadrilaterals. For these types of
quadrilaterals, they must have one special property. We will investigate it here.

This investigation shows that the opposite angles in an inscribed quadrilateral
are supplementary. By cutting the quadrilateral in half, through the diagonal,
we were able to show that the other two angles (that we did not cut through)
formed a linear pair when matched up.

Inscribed Quadrilateral Theorem: A quadrilateral is inscribed in a circle if
and only if the opposite angles are supplementary.



--------------------------------------------------------------------------------



## Spheres, Cones and Cylinders

> section: spheres-cones-cylinders
> id: solids

In the previous sections, we studied the properties of circles on a flat
surface. But our world is actually three-dimensional, so lets have a look at
some 3D solids that are based on circles:

::: column(width=220 parent="padded-thin")

    x-solid(size=220)

{.text-center} A [__cylinder__](gloss:cylinder) consists of two congruent,
parallel circles joined by a curved surface. 

::: column(width=220)

    x-solid(size=220)

{.text-center} A [__cone__](gloss:cone) has a circular base that is joined to 
a single point (called the vertex).

::: column(width=220)

    x-solid(size=220 static)

{.text-center} Every point on the surface of a [__sphere__](gloss:sphere) has
the same distance from its center.

:::

Notice how the definition of a sphere is almost the same as the definition of a
[[circle|radius|cube]] – except in three dimensions!

---
> id: gasometer

### Cylinders

::: column.grow

Here you can see the cylindrical _Gasometer_ in Oberhausen, Germany. It used to
store natural gas which was used as fuel in nearby factories and power plants.
The Gasometer is 120m tall, and its base and ceiling are two large circles with
radius 35m. There are two important questions that engineers might want to
answer:

* How much natural gas can be stored? This is the [[volume|area|diameter]] of
  the cylinder.
* {.reveal(when="blank-0")} How much steel is needed to build the Gasometer?
  This is (approximately) the [[surface area|circumference|diagonal]] of the
  cylinder.

{.reveal(when="blank-0 blank-1")} Let’s try to find formulas for both these
results!

::: column(width=300)

    x-media(src="images/gasometer.jpg" width=300 height=400 lightbox)

{.caption} Gasometer Oberhausen

:::

---
> id: cylinder-prism

#### Volume of a Cylinder

The top and bottom of a cylinder are two congruent circles, called __bases__.
The __{.m-blue} height *h*__ of a cylinder is the perpendicular distance between
these bases, and the __{.m-red} radius *r*__ of a cylinder is simply the radius
of the circular bases.

We can approximate a cylinder using a ${n}{n|5|3,20,1}-sided
[__prism__](gloss:prism). As the number of sides increases, the prism starts to
look more and more like a cylinder:

::: column(width=240)

    x-solid(size=240)

::: column(width=240)

    x-solid(size=240)

:::

---
> id: cylinder-volume

Even though a cylinder is technically not a prism, they share many properties.
In both cases, we can find the volume by multiplying the area of their
__{.m-red} base__ with their __{.m-blue} height__. This means that a
cylinder with radius _{.b.m-red} r_ and height _{.b.m-blue} h_ has volume

{.text-center} `V =` _{x-equation(solution="π r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cylinder-volume-hint1 cylinder-volume-hint2")}_

{.reveal(when="eqn-0")} Remember that radius and height must use the same units.
For example, if _r_ and _h_ are both in cm, then the volume will be in
[[`"cm"^3`|`"cm"^2`|cm]].

---
> id: oblique-cylinder
> goals: slide

::: column.grow

In the examples above, the two bases of the cylinder were always _directly above
each other_: this is called a __right cylinder__. If the bases are not directly
above each other, we have an __oblique cylinder__. The bases are still parallel,
but the sides seem to “lean over” at an angle that is not 90°.

    x-solid(size="300,200" static)
    x-gesture(target="#oblique-cylinder x-solid" slide="40,0")

::: column(width=300)

    x-media(src="images/pisa.jpg" width=300 height=360 lightbox)

{.caption} The _Leaning Tower of Pisa_ in Italy is not quite an oblique
cylinder.

:::

---
> id: cavalieri
> goals: slide

The volume of an oblique cylinder turns out to be exactly the same as that of a
right cylinder with the same radius and height. This is due to [__Cavalieri’s
Principle__](gloss:cavalieri), named after the Italian mathematician
[Bonaventura Cavalieri](bio:cavalieri): if two solids have the same
cross-sectional area at every height, then they will have the same volume.

Imagine slicing a cylinder into lots of thin disks. We can then slide these
disks horizontal to get an oblique cylinder. The volume of the individual discs
does not change as you make it oblique, therefore the total volume also remains
constant:

::: column(width=240)

    x-solid(size=280 style="margin: -20px")

::: column(width=240)

    x-solid.slide-me(size=280 static style="margin: -20px")
    x-gesture(target=".slide-me" slide="60,0")

:::

    // TODO You must always use the _perpendicular_ height. This is
    // the vertical line to left in the figure above.

    // TODO Volume of horizontal cylinder segments
    // https://www.mathopenref.com/cylindervolpartial.html

---
> id: cylinder-surface

#### Surface Area of a Cylinder

::: column.grow

To find the surface area of a cylinder, we have to “unroll” it into its flat
[net](gloss:net). You can try this yourself, for example by peeling off the
label on a can of food.

There are two [[circles|spheres|squares]], one at the top and one at the bottom
of the cylinder. The curved side is actually a large [[rectangle|square|ellipse]].

* {.reveal(when="blank-0 blank-1")} The two circles each have area
  _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_.
* {.reveal(when="eqn-0")} The height of the rectangle is
  _{x-equation.small(solution="h" keys=" " short-var)}_
  _{span.reveal(when="eqn-1")}and the width of the rectangle is the
  same as the [[circumference|diameter|tangent]] of the circles:_
  _{x-equation.small.reveal(when="blank-2" solution="2 π r" keys="+ × π sup" short-var)}_.

::: column(width=320)

    x-solid(size=340 style="margin: -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: cylinder-surface-1

This means that the total surface area of a cylinder with radius _r_ and height
_h_ is given by

{.text-center} `A =` _{x-equation(solution="2 π r^2 + 2 π r h" keys="+ − × ÷ π frac sup brackets" short-var)}_.

---
> id: cylinder-real-life

    figure: x-media(src="images/cylinders.jpg" width=460 height=125)

Cylinders can be found everywhere in our world – from soda cans to toilet paper
or water pipes. Can you think of any other examples?

The _Gasometer_ above had a radius of 35m and a height of 120m. We can now
calculate that its volume is approximately [[461,000 ± 1000]]`"m"^3` and its
surface area is approximately [[34,080 ± 100]]`"m"^2`.

---
> id: cone

### Cones

::: column.grow

A [__cone__](gloss:cone) is a 3-dimensional solid that has a circular
__{.m-red}base__. Its side “tapers upwards” as shown in the diagram, and ends
in a single point called the __{.m-green}vertex__.

The __{.m-red}radius__ of the cone is the radius of the circular base, and the
__{.m-blue}height__ of the cone is the perpendicular distance from the base
to the vertex.

Just like other shapes we met before, cones are everywhere around us: ice cream
cones, traffic cones, certain roofs, and even christmas trees. What else can you
think of?

::: column(width=280)

    x-solid(size=280)

:::

::: column(width=120 parent="padded-thin")

    x-media(src="images/ice-cream.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-media(src="images/traffic.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-media(src="images/roof.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-media(src="images/christmas.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-media(src="images/tipi.jpg" width=120 height=120 lightbox)

:::

---
> id: cone-volume

#### Volume of a Cone

::: column.grow

We previously found the volume of a cylinder by approximating it using a prism.
Similarly, we can find the volume of a cone by approximating it using a
[__pyramid__](gloss:pyramid).

Here you can see a ${n}{n|5|3,18,1}-sided pyramid. As the number of sides
increases, the pyramid starts to look more and more like a cone. In fact, we
could think of a cone as a pyramid with _infinitely many_ sides!

::: column(width=280)

    x-solid(size=280 style="margin: -44px 0 -20px 0")

:::

---
> id: cone-volume-1

This also means that we can also use the equation for the volume:
`V = 1/3 "base" × "height"`. The base of a cone is a circle, so the volume of a
cone with radius _r_ and height _h_ is

{.text-center} `V =` _{x-equation(solution="1/3 π × r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cone-volume-hint1 cone-volume-hint2")}_

---
> id: cone-circumscribed

Notice the similarity with the equation for the volume of a cylinder. Imagine
drawing a cylinder _around_ the cone, with the same base and height – this is
called the __circumscribed cylinder__. Now, the cone will take up exactly [[one
third|half|one quarter]] of the volume of the cylinder:

    figure: x-solid(size=280)

---
> id: cone-hilbert

{.i.lgrey} Note: You might think that infinitely many tiny sides as an approximation
is a bit “imprecise”. Mathematics spent a long time trying to find a more
straightforward way to calculate the volume of a cone. In 1900, the great
mathematician [David Hilbert](bio:hilbert) even named it as one of the 23 most
important unsolved problems in mathematics! Today we know that it is actually
impossible.

---
> id: oblique-cone
> goals: slide

::: column.grow

Just like a cylinder, a cone doesn’t have to be “straight”. If the vertex is
directly over the center of the base, we have a __right cylinder__. Otherwise,
we call it an __oblique cylinder__.

Once again, we can use Cavalieri’s principle to show that all oblique cylinders
have the same volume, as long as they have the same base and height.

::: column(width=280)

    x-solid(size="280,240" static)
    x-gesture(target="#oblique-cone x-solid" slide="60,0")

:::

---
> id: cone-surface

#### Surface Area of a Cone

::: column.grow

Finding the surface area of a cone is a bit more tricky. Like before, we can
unravel a cone into its net. Move the slider to see what happens: in this
case, we get one circle and one [[circle sector|circle segment|circle arc]].

{.reveal(when="blank-0")} Now we just have to add up the area of both these
components. The __{.m-yellow}base__ is a circle with radius _r_, so its area is

{.text-center.reveal(when="blank-0")} `pill(A_"Base","yellow","circle") =`
_{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_.

::: column(width=320)

    x-solid(size=340 style="margin: -32px -10px -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: slant-height

::: column.grow

The radius of the __{.m-green}sector__ is the same as the distance from the
rim of a cone to its vertex. This is called the __{.pill.green.step-target(data-to="s")}
slant height *s*__ of the cone, and not the same as the normal
__{.pill.blue.step-target(data-to="h")}height *h*__. We can find the slant
height using [Pythagoras](gloss:pythagoras-theorem):

| `s^2` | `=` | _{x-equation(solution="r^2 + h^2" keys="+ × π sup")}_       |
| `s`   | `=` | _{x-equation(solution="sqrt(r^2 + h^2)" keys="+ × sup sqrt")}_ |
{.eqn-system}

::: column(width=280)

    x-geopad.sketch(width=280 height=200): svg
      circle(x="point(140, 10)" name="a" hidden)
      circle(x="point(140, 170)" name="b" hidden)
      circle(x="point(220, 170)" name="c" hidden)
      circle(x="point(60, 170)" name="d" hidden)
      ellipse(cx=140 cy=172 rx=81 ry=20)
      path(x="angle(a,b,c)" size=12)
      path(x="triangle(a,c,d)")
      path.yellow(x="segment(b,c)" label="r" target="r")
      path.green(x="segment(a,c)" label="s" target="s")
      path.blue(x="segment(a,b)" label="h" target="h")

:::

---
> id: cone-surface-1

::: column.grow

The _{span.pill.step-target.red(data-to="arc")}arc length_ of the sector is the
same as the [[circumference|diameter|arc]] of the _{span.pill.step-target.yellow(data-to="base")}base_:
_{span.reveal(when="blank-0")}`2 π r`. Now we can find the area of the sector
using the [formula](gloss:circle-sector) we derived in a previous section:_

::: x-equation-system.reveal(when="blank-0" steps="π s^2 * ( 2 π r ) / (2 π s) | π r s" hints="cone-surface-1|cone-surface-1")
| `pill(A_"Sector","green","sector")` | `=` | `pill(A_"Circle","teal","circle") × pill("arc","red","arc") / pill("circumference","teal","circumference")` |
|                | `=` | _{x-equation(solution="π r sqrt(r^2 + h^2)" fns="/" substitutions="s: sqrt(r^2 + h^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |
:::

::: column(width=280)

    x-geopad.sketch(width=280 height=300 style="margin-top: -20px"): svg
      circle(x="point(140,110)" name="c1" hidden)
      circle(x="point(140,250)" name="c2" hidden)
      circle(x="point(235,141.5)" name="a" hidden)
      circle(x="point(45,141.5)" name="b" hidden)

      path.yellow.fill.light(x="circle(c2, 40)" target="base")
      path.yellow(x="circle(c2, 40)" target="base")
      path.yellow(x="segment(c2,point(180, 250))" label="r" target="base")
      path.red.thick.reveal(when="blank-0" animation="draw" duration=1500 x="circle(c2, 40)")

      path.teal.fill.light(x="circle(c1, 100)" name="circ" target="circle")
      path.green.fill.light(x="sector(c1, a, 2.5)" target="sector circle")

      path.green(x="segment(c1, a)" label="s")
      path.green(x="segment(c1, b)" label="s")
      path.red.thick(x="arc(c1, a, 2.5)" target="arc")
      path.teal.thick.transparent(x="circle(c1, 100)" target="circumference")

:::

---
> id: cone-surface-2

Finally, we just have to add up the area of the __{.m-yellow}base__ and the area
of the __{.m-green}sector__, to get the total surface are of the cone:

{.text-center} `A =` _{x-equation(solution="π r^2 + π r sqrt(h^2 + r^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_

---
> id: sphere

### Spheres

::: column.grow

A [__sphere__](gloss:sphere) is a three-dimensional solid consisting of all
points that have the same distance from a given  __{.m-green}center *C*__. This
distance is called the __{.m-red}radius *r*__ of the sphere.

You can think of a sphere as a “three-dimensional [circle](gloss:circle)”. Just
like a circle, a sphere also has a __{.m-blue}diameter *d*__, which is
[[twice|half]] the length of the radius, as well as chords and secants.

::: column(width=240)

    x-solid(size=240)

:::

---
> id: sphere-1

{.r} In a [previous section](/course/circles/tangets-chords-arcs#eratosthenes-1),
you learned how the Greek mathematician [Eratosthenes](bio:eratosthenes)
calculated the radius of Earth using the shadow of a pole – it was 6,371 km.
Now, let’s try to find the Earth’s total volume and surface area.
[Continue](btn:next)

---
> id: sphere-volume

#### Volume of a Sphere

To find the volume of a sphere, we once again have to use Cavalieri’s Principle.
Let’s start with a hemisphere – a sphere cut in half along the equator. We also
need a cylinder with the same radius and height as the hemisphere, but with an
inverted cone “cut out” in the middle.

As you move the slider above, you can see the cross-section of both these
shapes at a specific height above the base:

::: column(width=240)

    x-solid(size=240 style="margin: -24px 0 10px")

    x-geopad.sketch.r(width=220 height=120): svg
      circle(x="point(110,110)" name="c1")
      circle(x="c1.shift(0,-100*h)" name="h1")
      circle(x="h1.shift(-100 * sqrt(1-h*h),0)" name="a1")

      path.yellow.fill.light(x="triangle(c1,a1,h1)" target="tri")
      path(x="arc(c1,point(10,c1.x),pi)")
      path(x="segment(point(10,c1.x),point(210,c1.x))")
      path.green.thin(x="segment(c1,a1)" label="r" target="r tri")
      path.blue.thin(x="segment(c1,h1)" label="h" target="h h1 tri")
      path.red.thick(x="segment(a1,h1)" label="x" target="x tri")
      path.red.thick(x="segment(h1,point(220-a1.x,a1.y))")

::: column(width=240)

    x-solid(size=240 style="margin: -24px 0 10px")

    x-geopad.sketch.r(width=220 height=120): svg
      circle(x="point(10,10)" name="a2" hidden)
      circle(x="point(210,10)" name="b2" hidden)
      path(x="polygon(a2,b2,point(210,110),point(10,110))")
      
      circle(x="point(110,110)" name="c2")
      circle(x="c2.shift(0,-100*h)" name="h2")
      circle(x="h2.shift(-100*h,0)" name="x2")

      path.thin(x="segment(a2,c2)")
      path.thin(x="segment(b2,c2)")
      path.blue.thin(x="segment(c1,h1)" label="h" target="h")
      path.blue.thin(x="segment(h1,point(110-100*h,h2.y))")
      path.red.thick(x="segment(point(10,h2.y),point(110-100*h,h2.y))")
      path.red.thick(x="segment(point(110+100*h,h2.y),point(210,h2.y))")

:::

    x-slider(steps=100)


{.reveal(when="slider-0")} Let us try to find the cross-sectional area of both
these solids, at a distance __{span.pill.blue.step-target(data-to="h")}height *h*__
above the base.

::: column.grow

{.reveal(when="slider-0")} The cross-section of the hemisphere is always a
[[circle|ring|cylinder]].

{.reveal(when="blank-0")} The __{span.pill.red.step-target(data-to="x")}radius
*x*__ of the cross-section is part of a _{span.pill.yellow.step-target(data-to="tri")}
right-angled triangle_, so we can use [Pythagoras](gloss:pythagoras-theorem):

::: .reveal(when="blank-0")
{.text-center} `pill(r^2,"green","r") = pill(h^2,"blue","h1") + pill(x^2,"red","x")`.

Now, the area of the cross section is

    x-equation-system(steps="π x^2" hints="circle-cross-sec")
      table: tr
        td: em A
        td =
        td: x-equation(solution="π * (r^2 - h^2)" substitutions="x: sqrt(r^2 - h^2)" fns="sqrt" keys="+ − × ÷ π sup sqrt brackets" short-var)
:::

::: column.grow.reveal(when="eqn-0")

The cross-section of the cut-out cylinder is always a [[ring|circle|cone]].

::: .reveal(when="blank-1")
The radius of the hole is _h_. We can find the area of the ring by subtracting
the area of the hole from the area of the larger circle:

| _A_ | = | `π r^2 - π h^2` |
|     | = | `π (r^2 - h^2)` |
{.eqn-system}
:::

:::

---
> id: sphere-volume-1

It looks like both solids have the same cross-sectional area at every level.
By Cavalieri’s Principle, both solids must also have the same [[volume|surface
area|circumference]]! _{span.reveal(when="blank-0")}We can find the volume of
the hemisphere by subtracting the volume of the [cylinder](gloss:cylinder-volume)
and the volume of the [cone](gloss:cone-volume):_

::: x-equation-system.reveal(when="blank-0" steps="π r^3 - 1/3 π r^3" hints="sphere-volume")
| `V_"Hemisphere"` | = | `V_"Cylinder" - V_"Cone"` |
|                  | = | _{x-equation(solution="2/3 π r^3" keys="+ − × ÷ π frac sup brackets" short-var)}_ |
:::

---
> id: sphere-volume-2

A sphere consists of [[two]] hemispheres, _{span.reveal(when="blank-0")}which
means that its volume must be_

{.text-center.reveal(when="blank-0")} `V = 4/3 π r^3`.

---
> id: earth-volume
> goals: numbers

::: column.grow

The Earth is (approximately) a sphere with a radius of 6,371\ km. Therefore its
volume is

| `V` | `=` | _{x-equation(solution="4/3 pi × 6371^3" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |
|     | `=` | _{span.numbers}1_ `"km"^3` |
{.eqn-system}

{.reveal(when="numbers")} The average density of the Earth is `5510 "kg/m"^3`.
This means that its total mass is

{.text-center.reveal(when="numbers")} `"Mass" = "Volume" × "Density" ≈ 6 × 10^24 "kg"`

{.reveal(when="numbers")} That’s a 6 followed by 24 zeros!

::: column(width=280)

    x-solid(size=280 rotate="0.5")

:::

---
> id: sphere-sum

If you compare the equations for the volume of a cylinder, cone and sphere, you
might notice one of the most satisfying relationships in geometry. Imagine we
have a cylinder with the same height as the diameter of its base. We can now fit
both a cone and a sphere perfectly in its inside:

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") +

{.text-center} This cone has radius `r` and height `2r`. Its volume is
_{x-equation.small(solution="2/3 π r^3" keys="× π sup frac" short-var)}_

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") =

{.text-center} This sphere has radius `r`. Its volume is
_{x-equation.small(solution="4/3 π r^3" keys="× π sup frac" short-var)}_

::: column(width=220)

    x-solid(size=220 style="margin-top: -20px")

{.text-center} This cylinder has radius `r` and height `2r`. Its volume is
_{x-equation.small(solution="2 π r^3" keys="× π sup frac" short-var)}_

:::

{.reveal(when="eqn-0 eqn-1 eqn-2")} Notice how, if we [[add
up|subtract|multiply]] the volume of the cone and the sphere, we get exactly
the volume of the cylinder!

---
> id: sphere-maps
> goals: move projection

#### Surface Area of a Sphere

Finding a formula for the surface area of a sphere is very difficult. One reason
is that we can’t open and “flatten” the surface of a sphere, like we did for
cones and cylinders before.

This is a particular issue when trying to create maps. Earth has a curved,
3-dimensional surface, but every printed map has to be flat and 2-dimensional.
This means that Geographers have to cheat: by stretching or squishing certain
areas.

Here you can see few different types of maps, called __projections__. Try moving
the red square, and watch what this area _actually_ looks like on a globe:

    .sphere-maps
      x-select.tabs
        .projection Mercator
        .projection Cylindrical
        .projection Robinson
        .projection Mollweide
      .map-body
        .left
          svg.sphere-map(width=240 height=240 viewBox="0 0 240 280")
            path.outline
            path.grid
            path.land
            path.map-select
        .right
          svg.sphere-map#projection(width=440 height=280 viewBox="0 0 440 280")
            path.outline
            path.grid
            path.land
            rect.map-select(x="-24" y="-24" width=48 height=48 style="cursor: move")
          p.caption As you move the square on the map, notice how the size and shape of the #[em actual] area changes on the 3-dimensional globe.
    x-gesture(target="#projection" slide="50, 20")

---
> id: sphere-surface

To find the surface area of a sphere, we can once again approximate it using a
different shape – for example a polyhedron with lots of faces. As the number of
faces increases, the polyhedron starts to look more and more like a sphere.

{.todo} COMING SOON: Sphere Surface Area Proof

    // If we connect the small polygons to the center of the sphere, we get
    // lots of small pyramids pointing inwards. The diagram shows one of these pyramids
    // in red. The height of each pyramid is the [[radius|diameter]] of the sphere.
    
    // Here is a
    // volume = lots of cones = 1/3 * radius * lots of bases = 1/3 * radius * surface area
    
    // And therefore,
    // surface area = 3 * volume / radius = 
    
    // In other words, the surface area of a sphere with radius _r_ is `S = 4 π r^2`.

    // ---
    // > id: earth-surface
    // 
    // surface of earth



--------------------------------------------------------------------------------



## Conic Sections

> section: conic-sections
> id: conics
> goals: ellipse parabola hyperbola

The circle is one of four different shapes which can be created using “slices”
through a [cone](gloss:cone). This can be demonstrated using the light cone of
a torch:

    x-conic-section
    x-scale-box(width=760).conics
      .row
        .active
          p: strong Circle
          include svg/circle.svg
        .hide
          p: strong Ellipse
          include svg/ellipse.svg
        .hide
          p: strong Parabola
          include svg/parabola.svg
        .hide
          p: strong Hyperbola
          include svg/hyperbola.svg

---
> id: conics-1

If you point the torch vertically downwards, you see a [[circle|ellipse|oval]]
of light. _{span.reveal(when="blank-0")}If you tilt the cone, you get an
[__ellipse__](gloss:ellipse). If you tilt it even further, you get a
[__parabola__](gloss:parabola) or a [__hyperbola__](gloss:hyperbola)._

---
> id: conics-2

::: column.grow

Collectively, these four shapes are called [__conic sections__](gloss:conic-section).
Even though they all look very different, they are closely related: in fact,
they can all be generated using the same equation!

Conic sections were first studied by the ancient Greek mathematician [Apollonius
of Perga](bio:apollonius), who also gave them their unusual names.

In later courses, you’ll learn much more about parabolas and hyperbolas. For
now, let’s have a closer look at the ellipse.

::: column(width=300)

    x-media(src="images/conics.svg" width=300 height=340)

:::

---
> id: ellipses

### Ellipses

An ellipse just looks almost like an “elongated circle”. In fact, you could
think about it as a circle with _two centers_ – these are called __focal
points__. Just like every point on a circle has the same distance from its
center, every point on an ellipse has the same _sum of distances_ to its two
focal points.

If you have a long string connected to two fixed points, you can draw a perfect
ellipse by tracing the maximum reach of the strings:

{.todo} Coming soon: Ellipses drawing interactive

    // ---
    // > id: ellipses-1
    // You can also move the focal points around. Notice how, if they are further
    // apart, the ellipse will be [[more|less]] elongated. If they are close together,
    // it will look almost like a [[circle|parabola|trapezium]].

---
> id: ellipses-2
> goals: v0 v1 v2 v3

There are many other physical representations of how you could draw an ellipse:

::: column(width=320 parent="padded-thin")

    x-video(src="images/gears.mp4" poster="images/gears.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Gears

::: column(width=320)

    x-video(src="images/trammel.mp4" poster="images/trammel.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Trammel

::: column(width=320)

    x-video(src="images/disk.mp4" poster="images/disk.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Disk

::: column(width=320)

    x-video(src="images/swing.mp4" poster="images/swing.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Swing

:::

---
> id: orbits

### Planetary Orbits

::: column.grow

You might remember from the very beginning of this course, that ancient Greek
astronomers believed that the Earth is at the centre of the universe and that
the sun, moon and planets move around Earth on circular orbits.

Unfortunately, astronomical observation of the sky didn’t quite support this.
For example, the sun appeared larger during some parts of the year and smaller
during others. On a circle, every point should have [[the same|an increasing|a
decreasing]] distance from its center.

::: column(width=330)

    x-media(src="images/hipparchus.jpg" width=330 height=280 lightbox)

{.caption} Greek astronomer Hipparchus of Nicaea

:::

---
> id: epicycles
> goals: play

To fix this, astronomers added __Epicycles__ to their model of the solar system:
planets move on a large circle around Earth, while simultaneously rotating on
a smaller circle. While very complicated, this was the most widely accepted
model of our universe for more than 1000 years:

::: column(width=320)

    .r
      svg(width=320 height=320)
        circle.large-circle(cx=160 cy=160 r=120 fill="none" stroke="#ccc" stroke-width="2px")
        circle.small-circle(cx=280 cy=160 r=30 fill="none" stroke="#ccc" stroke-width="2px")
        path(fill="none" stroke="#fd8c00" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle(cx=160 cy=160 r=15 fill="#0f82f2")
        circle.earth(cx=310 cy=160 r=10 fill="#fd8c00")
      x-play-btn

{.caption} This planet makes ${n}{n|6|2,12,1} rotations around the small circle
(the __epicycle__) during one rotation around the large circle (the
__deferent__).

::: column(width=320)

    x-media(src="images/epicycles.jpg" width=320 height=320)

{.caption} A 16-century drawing of epicycles in the __Geocentric model__. The
Greek word “planetes” means “wanderers”.
:::

---
> id: kepler
> goals: play

::: column.grow

Over time, people realised that Earth was just one of many planets orbiting the
sun (the __Heliocentric model__), but it wasn’t until 1609, that the astronomer
[Johannes Kepler](bio:kepler) discovered that planets actually move on
_elliptical orbits_.

The sun is in one of the two focal points of these ellipses. The planets speed
up as they get closer to the sun, and slow down as they move further away.

::: column(width=320)

    .r
      svg(width=320 height=240)
        path.sweep(fill="#0f82f2" opacity="0.25")
        path.orbit(fill="none" stroke="#ccc" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle.earth(cx=280 cy=120 r=10 fill="#0f82f2")
        circle(cx=220 cy=120 r=15 fill="#fd8c00")
        circle(cx=100 cy=120 r=4 fill="#ccc")
      x-play-btn

:::

---
> id: newton
> goals: apple

A few decades later, [Isaac Newton](bio:newton) was able to prove Kepler’s
observations, using his newly developed laws of [__gravity__](gloss:gravity).
Newton realised that there is a force between any two masses in the universe –
similar to the attraction between two magnets. 

Gravity is what makes everything fall to the ground and gravity is also what
makes the planets move around the sun. It is only the great speed at which
planets move, that prevents them from falling directly into the sun.

::: column(width=280)

    // Source: https://www.flickr.com/photos/hikingartist/6217869031
    .newton.interactive
      img(src="images/newton-2.jpg" width=280 height=370)
      img.over(src="images/newton-1.jpg" width=280 height=370)
      img.apple(src="images/newton-apple.png" width=30 height=40)
      .credit Frits Ahlefeldt
    x-gesture(target=".newton" offset="20,-120")

::: column.grow

Using Newton’s laws, you can derive the path that objects take when moving under
the force of gravity. It turns out that Planets move on ellipses, but other
objects like comets can travel on [parabolic](gloss:parabola) or
[hyperbolic](gloss:hyperbola) paths: they fly close to the sun before turning
around and shooting off into the universe, never to come back.

According to legend, a falling apple inspired Newton to think about gravity. He
was one of the most influential scientist of all time, and his ideas shaped our
understanding of the world for nearly 300 years – until Albert Einstein
discovered relativity in 1905.

:::
