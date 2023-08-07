<template>
    <div class="langdingpageCover">
        <img class="coverimage" src="../assets/images/landing/landing7.png" alt="cover">
        <!-- <h1>MacBook Pro</h1> -->
        <!-- <h2>The Most Powerful Laptop</h2> -->
        <!-- <button>Add To Cart</button> -->
    </div>
    <div class="quoteContainer">
        <img class="authorProfile" src="../assets/images/profile.svg" alt="author">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p class="authorName">-- Author's Name</p>
    </div>
    <div class="productContainer">

        <div class="promotionProduct">
            <div class="info">
                <h5>VIP Member</h5>
                <p>With the Gold Credit Card, you enjoy many benefits. Higher limits, contactless payments and Priority Pass. Order your credit card! The Gold Credit Card comes as a World Mastercard or Visa. The minimum age is 18 for credit cards and 16 for partner cards.</p>
            </div>
            <img class="productIcon" src="../assets/images/svg/landingcart.svg" alt="">
        </div>
        <div class="promotionProduct">
            <div class="info">
                <h5>VIP Member</h5>
                <p>With the Gold Credit Card, you enjoy many benefits. Higher limits, contactless payments and Priority Pass. Order your credit card! The Gold Credit Card comes as a World Mastercard or Visa. The minimum age is 18 for credit cards and 16 for partner cards.</p>
            </div>
            <img class="productIcon" src="../assets/images/svg/landingcart.svg" alt="">
        </div>
        <div class="promotionProduct">
            <div class="info">
                <h5>VIP Member</h5>
                <p>With the Gold Credit Card, you enjoy many benefits. Higher limits, contactless payments and Priority Pass. Order your credit card! The Gold Credit Card comes as a World Mastercard or Visa. The minimum age is 18 for credit cards and 16 for partner cards.</p>
            </div>
            <img class="productIcon" src="../assets/images/svg/landingcart.svg" alt="">
        </div>
        

    </div>

    <div class="trustByContainer">
        <h5>Trusted By</h5>
        <dic class="companyIconContainer">
            <img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" alt="">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png" alt="">
            <img src="https://seeklogo.com/images/T/twitter-icon-circle-black-logo-35827D553B-seeklogo.com.png" alt="">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="">
            <img src="https://cdn3.iconfinder.com/data/icons/inficons/512/apple.png" alt="">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEUAAAD///+FhYWsrKw2Njb39/f8/Pza2tr09PTS0tLn5+fCwsKysrK/v7/j4+Nubm4sLCxXV1d3d3fPz8+VlZWbm5vY2NhdXV25ublRUVGMjIzJycl/f39MTEw4ODhGRkYWFhZkZGSlpaUaGhohISEODg4mJiZycnI+Pj4vLy9paWle52f9AAAL9ElEQVR4nM2d6WKqMBCFcQX3at2rFrwubd//Aa+4ozCZM5kA53eLfECSyWzxKq7VDPxObVxd/a03H7tw73n7cFdfR6PqZN7xg6bz3/ccXrs5nY9nHx6tejTuTh3ehDPCfndkYnvWZtTtO7oTF4T97QyAe2i49R3cjTZho3fci/CuOvYaynekShh0ZS/v5VXWAs2b0iNszocKeBetu3pvUouwdVTDu+ivpXRnKoTN2q8yX6zDVmWxVCD0Rw7wLlopLCHWhC290ZemmbU1YEn4+e2UL9b3Z4GErbVzvjOj1aRjQegvcuGLtbAwdsSEwSA3vlgDsRUgJZzkyhdrkivhV5g74Glf+ZUbYfOvAL5YkcSWExDOC+KL1c2BsBEVCHjaeMAzDkrYKZQvVs8toTsTlK+RQ8I24npxp0PbFWGRU0xSczeEy6K5nrR0QNjMzwrlaMHeHXMJ2/+KZnrRgbtsMAk/iwZKEXNvzCPsFU2TKt7KyCLcFs2Soa0W4bhokkxxdlQMwmrRHITGGoSroilImRdGI2G5ARmIJsKyA5oRDYRlHoM3GaYbmjB/f5NENTlht+h7Z6ojJfwq+s7ZohzGBGG/6PsGRJjh2YSNsOjbBvQhIfwp+q4hzXBCNwtheKj/1A+hgytnLotZhLrT6OY46U0T/qPA/6yNo43ib2RNqBmEirPMseZnO+MbfndklX/zpAwPXAbhTudHZzWO4y+YH0OFH6sjhCqxweEcCKRMFTx5VT6hgmN0N4EDDC1rh3pq+C2NMLDmG8pCfc2a5ehIczGmEdrmH/xZRN2/rJI7BjxCS7/T0DLL59PG1EhZMt4J7b7RX8vsl1g20wCH0CrHSRCjTZPcoDqaCW2cv0e1nEn/IL2HN0/4G6Gcb6/wgT4kddIeTIRyx8xAubBgKrTmXh3hL4RyexQJWvIkjee9DJUXQuk0gwWeuZJ9UCuKUBpEy95/2km2biSfdpJQuNgCMWdQU8ntRNmEwmQZpUUwVW2JpZqwGhOEsmQSmZXNJQwFdzTMIpR99aqr4KsCCWBy2X8mFG1dtMoi0gGFa+IinVBkr7kFDGWAiZf4RCjZmTn9RNtSvsRIfBC2BBdC8wTzAvS8xyb1QSgoO5OmXrNk59B8JDDeCQVPDEyDxGT1Br0nl82dEPfmfQvuO+j7vt9nGLHWLun7FuNOiM/LmLsw+BpHT8vR96o7JbZb9j73+z7xRohHQxFTplWtp11its1wCmgEFW7T/I0QLjBIdzCn3i41AFILKVWiJn9Jwib6/0RIMimjA/TjzXBXCgs1E4SwScp0+n5y4mf7pH/AF9CkaZ4gRB0GvB1hn3vZ3ycrSwvwZtdcCFEv8J4FiCxA92GtBnib7C+ENfB/OfNoP4QuufO1Aa878wsh6IDiuGXQh3a5IU3A62d6JmyA/8qwSSSxwKou4NWveCYEd4bvsYE3yWJk2mWpvTsheGWjudZw0YBAoOOdEPs/45aiUY7yqOuUHxOCNoTxFabaoIWofyXEgr5pkeSESlQ+tL0SYmuFyV4rQ4niTbMrIfRPPwbAcmXdXgixYWhw4ds6H5TVPxNiT90QBy3PLHNW90wIpQUYVvuypb6vzoTQY6ddwCX7Rs+zhgdONPQr1Gj1pauYELJ2aXtG4jZ3LP9ECDkwyMoGob3tVL0TIZS4QqYElbGUdnwiRMbOmnyFbntiyRSdCJGNAFnQWLqJNNZvxYP296R/pmxr4UVND3KzkRsnZpD837JqpyW0/Qw8aLGgALnm7Ya6CEuQEdb3kByaIfW73I80o2gAEDQcvjzE60dGY7jZ4faEkOOs6yHLIbVzYsd27AmhVLCJh+T/URYNezzbE0LL0tJDnA5UFj7b+LMnhEKBKw9p3UUtFuwwjD0htBsaeEjCJWWVsoPIORMuPGD5/Ef9KnsfrUCIJPJvPCBd71fluSoQIru0Xw/ojkQ6EvMkRLZDOw/IoyFThPIkRGbHECEkd4d5EiKpMVAmVGkInbW/Lc1XihECb7E0Mw32lYb8PybvLU9CbKYBVgsy04sd2FYgRMp4dx7g099TURn2c1UgRNIE6h7yPCjLm70Ly9kuXXuIfUARsmN0ORNG0P6QCnCzYxY5E46gPT5VfMD2u+a8x696iOOKrD7gGvz2hJADdOIhMW4ytsZ1aeXsa5tD/lLSbON6wOw9wlD+T8eDXHPkDzOvcejWGKIcl1B5sI/FLciWF6q9oin3OtSZJMBiT2RJumpyKBXHg+okm1j8kC6y0AxyE3E86Kv7BWPA9Dyo2U+Z+BkomB7HgKHhQ2de6vX8poYhlEEex/GhpC+6N4Re433qd6AT3uYnQmi5MCR9iXuuvIrap0G+pTifBit5ogm1+oFSMxpW/XLO+oLC4obSZqW0L6rcAWr8sDkTQt/1ivht+AFnibR/IYtmdCbEqltoQp0UYXLGhrqTXPJLMVuEzmzD/GAZItvlY3lJlxxhbKox1jxZL4p0ahlWWFC5ZLJj5QOmcgvr5C/6ByDT8Jarj6VrGZv1W2aZ0pV/2PO71VuAmwITod2pV4YzK7C34VdEdU/mczMsFn5T+S1mNVVuhFipOhnOv0j8oZoAsQsP7oSgxczoCyVqfsRoJYLZTI/6Q9QSMRNWmhL7zbTWovP0o4YU3Z2zurbA1s2PufgWa1F36aV0IUSbsrJ6XLax7m+MI2PAeuXaEyG6SjM70wAW75DTlhD05j3X48Otg5lNIxrMdN4fVqMUcLpI9FSAq+dNVYh3tRlDZ8bspwV2pu0mCNGKfKBFVLNGbrEPY27bTHQoNRKE+KYH6fjc3mYUm8y2wGXAgpWokiSEK3rINL4U9TuT2T3+vvuJltsvrOcp6si7tfa5r97wts7gz0hVs9EIgqAh6ceL9gi6J47cCfGKF/2+upQgb5KX1utL4ENy0lk3Q3DE4L1fmyAd7p9a+26j4Of/GEMPQkFwTNKTTia4/W9a30RJtwdjBwkloYMwvfelqARUMqHiwk9reOoC97zXk5zcw9gRWAuPSz4blc+EIg+Se0TBt/VsyCf266Ljl9w1875IMAMmEloShDIfmduxKHFqJfYqSZ+L7ISZyCGg5KEvEldIEoqavJ9sQGfWjejMm+T2/MVvBjf5vMpRX3bRaSx/yWu8EIrDKi7mG+EBFy8f1KvvU3xCdd3yEKR3CYfMq/dB8ZwZ1jngfAmf9VvMQfOsoA+Ls7peNZUmrrzNCO8eept0ipHWfkp8oE/0dql3QtjtlpDKp2qR7vD+iFOiLHbpFHvrE0s6Fn0lUzwraXEkyz4zOyvGnk0/tLQ0CjfnH06k47Fr1zYzLcnB1RmWx7fzz8zybU9yT60HSY92So23Z/0bQzZAe2vd9TR9k5MRz9XJhf1YMt9ka6zQjTCjeND5ecBRjX6VwefWbUJjHmc6h8PxfPo+9zT93mSk13E4qygrx3O568PoWB2Px8tldTUYqqUTXwWfy13KBnqEFpkc2YSNsOi7BkQEGIjcmFJ2mMsQ4UZRK90oVNSiROY3lavrcbbIXCo6g0vs08hV9I7NkKOmWnHnSIa0EFMWnv6yqC2Tl8+YZ1h2RGNMwZxJWaYu8u8yB00YuaJlfosMRzQnG7a80w0neMkhLGl3WWZyHYuwpEs/7wRNHqFaYaGmmIe8Mgm1zymyV8iNWXIJK4EoyO9MC7a/kk1YroURCFcChCWab5BTehHCSl+v4N5GdShtACJ02M8PEP98UAlhCb5UNCkCJawExfrgIjjmAxMKc1yUJMi8FhBWgqKOk5lJgnYSQss6WKlCWVqSjLCIHZU0zVNKWGnne+bKnzh1TkzIPM1YRwuLTB0LQsusAr5+mLVtDghPU4779/htxWdNePpW3R5ZOWTucx0SnjbH7ozVkULCowLhyQSYaEd0Yx22KllyKoQnteCyFoO4pbNGaRGeNNdbIdc145G8bCkSnr7WrobF+r1VTYxXJTyp0TtC/dReNejpvb2LtAlj9YU5QMOJYpLxXS4IY7XnVWSrvBl11TPhr3JFeFa/M45M+Xi7xbIryGPkyynhWc3A79TG1dXfevOxC0+DdB/u6utoVJ3MO9PAfaHtfwNPp+Ek+h/7AAAAAElFTkSuQmCC" alt="">
        </dic>
    </div>

</template>

<style src="../assets/css/LandingPageView.css"></style>