<template>
    <div>
        <!--loading动画-->
        <div class="loading" v-if="isLoading">
        </div>
        <!--主题列表-->
        <div class="list">
            <ul>
                <li class="nav">
                    <span class="active">全部</span>
                    <span>精华</span>
                    <span>分享</span>
                    <span>问答</span>
                    <span>招聘</span>
                    <span>客户端测试</span>
                </li>
                <li v-for="post in posts">
                    <!--头像-->
                    <img :src="post.author.avatar_url" alt="">
                    <!--回复/浏览-->
                    <span class="text">
                        <span class="reply_count">{{post.reply_count}}/</span>
                        <span class="visit_count">{{post.visit_count}}</span>
                    </span>
                    <!--帖子的类型-->
                    <span :class="[
                    {top: post.top === true},
                    {good: post.good === true},
                    {tab: post.top !== true && post.good !== true}
                    ]">{{post | tabFormatter}}</span>
                    <!--标题-->
                    <span class="title">{{post.title}}</span>
                    <!--时间-->
                    <span class="last-time">{{post.last_reply_at | forTimeData}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PostList",
        data(){
            return {
                isLoading: true,
                posts: []
            }
        },
        methods:{
            getData(){
                this.$axios.get('https://cnodejs.org/api/v1/topics',{
                    page:1,
                    limit:20
                }).then((response)=>{
                    this.posts = response.data.data
                    console.log(this.posts)
                    this.isLoading = false
                },(err)=>{
                    console.log(err)
                })
            }
        },
        beforeMount(){
            this.getData()
        }
    }
</script>

<style scoped lang="scss">

    //loading动画
    @keyframes test{
        0%{
            width: 0;height: 0; opacity: 1;
        }
        100%{
            width: 100px;height: 100px; opacity: 0;
        }
    }
    .loading{
        width: 300px;
        height: calc(100vh - 50px);
        position: relative;
        margin: auto;
        &::before,&::after{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        background: black;
        border-radius: 50%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        animation: test 1.5s linear infinite;
        }
        &::after{
            animation-delay: 0.75s;
        }
    }

    .list{
        > ul > .nav{
            display: flex;
            align-items: center;
            padding: 8px 10px;
            border-bottom: 1px solid #F5F5F5;
            background: #F5F5F5;
            &>span{
                margin: 0 10px;
                color: #80bd01;
                font-size: 14px;
                &:hover{
                    color: #005580;
                }
            }
            &>span.active{
                background-color: #80bd01;
                color: #fff;
                padding: 3px 4px;
                border-radius: 3px;
            }
        }
        > ul > li{
            display: flex;
            align-items: center;
            padding: 10px 10px;
            border-bottom: 1px solid #F5F5F5;
            position: relative;
            background: #fff;
            &:hover{
                background: #F5F5F5;
                &>.title{
                    text-decoration: underline;
                    cursor:pointer;
                }
                &>img{
                    cursor:pointer;
                }
            }
            &>*{
                margin: 0 6px;
            }
            &>img{
                width: 30px;
                height: 30px;
            }
            &>.text{
                width: 50px;
                text-align: center;
            }
            & .reply_count{
                color: #9e78c0;
                font-size: 14px;
            }
            & .visit_count{
                color: #b4b4b4;
                font-size: 10px;
            }

            &>.top,
            &>.good{
                color: #fff;
                font-size: 12px;
                background: #80bd01;
                padding: 2px 4px;
                border-radius: 3px;
                white-space: nowrap;
            }
            &>.tab{
                color: #999;
                font-size: 12px;
                background: #e5e5e5;
                padding: 2px 4px;
                border-radius: 3px;
                white-space: nowrap;
            }
            &>.title{
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            &>.last-time{
                white-space: nowrap;
                position: absolute;
                right: 9px;
                color: #778087;
                font-size: 11px;
            }

        }

    }


</style>