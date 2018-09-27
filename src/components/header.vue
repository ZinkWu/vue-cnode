<template>
    <div class="header">
        <a href="#" class="logo"><img src="../assets/cnodejs_light.svg" alt=""></a>
        <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">新手入门</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">关于</a></li>
            <li><a href="#">注册</a></li>
            <li><a href="#">登录</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "top-header"
    }
</script>

<style scoped lang="scss">
    .header{
        background: #444;
        display: flex;
        justify-content: space-between;
        align-items: center;
        > .logo > img{
            width: 120px;
            margin-left: 12vw;
        }
        > ul{
            height: 50px;
            display:flex;
            align-items: center;
            margin-right: 12vw;
            > li {

                > a{
                    padding: 11px 10px;
                    font-size: 13px;
                    color: #ccc;
                    &:hover{
                        color: #fff;
                    }
                }
            }

        }
    }
</style>