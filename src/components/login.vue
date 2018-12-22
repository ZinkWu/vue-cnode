<template>
    <div class="login">
        <div class="nav">
            <ul class="nav_list">
                <li>
                    <router-link :to="{
                        name: 'root'
                        }">主页
                    </router-link>
                </li>
                <li>/</li>
                <li>登陆</li>
            </ul>
        </div>
        <div class="main_page">
            <div class="input_wrapper">
                <label class="input_main">
                    accessToken
                    <br/>
                    <input type="password" v-model="accessToken"/>
                </label>
            </div>
            <div class="button_wrapper">
                <button @click="login">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                accessToken: '',
            }
        },
        methods: {
            login() {
                let result = this.$axios.post('https://cnodejs.org/api/v1/accesstoken', {
                    accesstoken: this.accessToken
                }).then(() => this.$router.push({name: 'root'}))
                    .catch(() => {
                        alert('accessToken错误')
                    });
                console.log(result);
            }
        }
    }
</script>

<style scoped lang="scss">
    .login {
        > .nav {
            > .nav_list {
                display: flex;
                flex-direction: row;
                background-color: #f6f6f6;
                padding: 10px;

                > li {
                    font-size: 15px;

                    &:not(:nth-child(1)) {
                        color: #999;
                    }

                    &:nth-child(odd) {
                        margin-left: 5px;
                        margin-right: 5px;
                    }

                    &:nth-child(1) {
                        > a {
                            color: #80bd01;
                        }
                    }
                }
            }
        }

        > .main_page {
            margin: 0;
            background-color: white;
            padding-top: 55px;
            padding-left: 10px;
            padding-bottom: 50px;

            > .input_wrapper {
                > .input_main {
                    > input {
                        margin-top: 5px;
                        width: 284px;
                        height: 35px;
                        border: 1px solid #999;
                        border-radius: 10px;
                        padding-left: 10px;

                        &:focus {
                            outline: none;
                        }
                    }
                }
            }

            > .button_wrapper {
                margin-top: 20px;

                > button {
                    border: none;
                    background-color: #08c;
                    border-radius: 4px;
                    font-size: 14px;
                    color: white;
                    padding: 10px 15px;

                    &:hover {
                        background-color: #05c;
                    }
                }
            }
        }
    }
</style>