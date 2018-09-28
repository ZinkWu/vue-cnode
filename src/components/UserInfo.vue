<template>
    <div class="userinfo">
        <div class="loading" v-if="isLoading"></div>
        <div v-else class="userinfo-main">
            <div class="user-wrapper">
                <router-link :to="{
                name: 'root'
                }">
                    <p class="to-root">主页 /</p>
                </router-link>
                <div>
                    <img :src="userinfo.avatar_url" alt="">
                    <span>{{userinfo.loginname}}</span>
                    <p class="num">{{userinfo.score}} 积分</p>
                    <p class="time">注册时间 {{userinfo.create_at | forTimeData}}</p>
                </div>

            </div>
            <p class="bar">最近创建的话题</p>
            <div class="topics">

                <ul>
                    <li v-for="(item,index) in userinfo.recent_topics" v-if="index<=4">
                        <!--头像-->
                        <img :src="item.author.avatar_url" alt="">
                        <!--标题-->
                        <router-link :to="{
                            name: 'post_count',
                            params:{
                                id: item.id
                            }
                        }">
                            <span class="title">{{item.title}}</span>
                        </router-link>
                        <!--时间-->
                        <span class="last-time">{{item.last_reply_at | forTimeData}}</span>
                    </li>
                </ul>
            </div>
            <p class="bar">最近参与的话题</p>
            <div class="replies">
                <ul>
                    <li v-for="item in userinfo.recent_replies">
                        <!--头像-->
                        <router-link :to="{
                            name: 'user_info',
                            params:{
                                name: item.author.loginname
                            }
                        }">
                            <img :src="item.author.avatar_url" alt="">
                        </router-link>
                        <!--标题-->
                        <router-link :to="{
                            name: 'post_count',
                            params:{
                                id: item.id
                            }
                        }">
                            <span class="title">{{item.title}}</span>
                        </router-link>
                        <!--时间-->
                        <span class="last-time">{{item.last_reply_at | forTimeData}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserInfo",
        data() {
            return {
                isLoading: true,
                userinfo: {}
            }
        },
        methods: {
            getData() {
                this.$axios.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
                    .then((response) => {
                        this.userinfo = response.data.data;
                        this.isLoading = false;
                        console.log(this.userinfo)
                    }, (err) => {
                        console.log(err)
                    })
            }
        },
        beforeMount() {
            this.getData()
        },
        watch:{
            '$route'(to,from){
                this.getData()
            }
        }
    }
</script>

<style scoped lang="scss">
    .userinfo {
        > .userinfo-main {
            > .user-wrapper {
                 .to-root{
                    background: #F6F6F6;
                     padding: 10px;
                     color: #80BD01;
                     border-bottom: 1px solid #E5E5E5;
                     font-size:14px;
                     &:hover{
                         text-decoration: underline;
                     }
                }
                > div{
                    background: #fff;
                    padding: 15px 10px;
                    >img {
                        height: 40px;
                        width: 40px;
                    }
                    > span{
                        color: #778087;
                        font-size: 14px;
                    }
                    > .num{
                        font-size: 14px;
                    }
                    > .time{
                        font-size: 14px;
                        color: #ababab;
                    }
                }

            }
            .bar{
                margin-top: 15px;
                background: #F6F6F6;
                padding:10px;
                border-bottom: 1px solid #E5E5E5;
                font-size: 14px;
            }
            > .topics,.replies{
                background: #F6F6F6;
                position: relative;
                > ul{
                    > li{
                        padding:10px;
                        border-bottom: 1px solid #E5E5E5;
                        font-size: 14px;
                        display: flex;
                        align-items: center;
                    }
                }
                 img{
                    width: 30px;
                    height: 30px;
                }
                .title{
                    /*color: #000;*/
                    margin: 0 15px;
                    color: #08c;
                    &:hover{
                        text-decoration: underline;
                    }
                }
                .last-time{
                    position: absolute;
                    right: 10px;
                }
            }
        }
    }

</style>