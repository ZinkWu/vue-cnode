<template>
    <div class="pageination">
        <button @click="changeBtn">首页</button>
        <button @click="changeBtn">上一页</button>
        <button v-if="currentPage>3">···</button>
        <button v-for="btn in pagebtns" @click="changeBtn(btn)"
                :class="[{currentPage:btn === currentPage}, 'pagebtn']">{{btn}}</button>
        <button @click="changeBtn">下一页</button>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        data(){
            return {
                pagebtns: [1,2,3,4,5,'···'],
                currentPage: 1
            }
        },
        methods:{
            changeBtn(btn){

                if(typeof btn !== 'number' && typeof btn !== 'string'){
                    this.currentPage++
                    switch (btn.currentTarget.innerText){
                        case '首页':
                            this.pagebtns = [1,2,3,4,5,'···']
                            this.changeBtn(1)
                            break
                        case '上一页':
                            let current1 = document.getElementsByClassName('currentPage')[0]
                            current1.previousElementSibling.click()
                            break
                        case '下一页':
                            let current2 = document.getElementsByClassName('currentPage')[0]
                            current2.nextElementSibling.click()
                            break
                        default:
                            break;
                    }
                }else if(typeof btn === 'string'){
                    return false
                }else{
                    this.currentPage = btn
                    if(btn === this.pagebtns[4]){
                        this.pagebtns.shift()
                        this.pagebtns.splice(4,0,this.pagebtns[3]+1)
                    }else if(btn === this.pagebtns[0] && this.pagebtns[0] !== 1){
                        this.pagebtns.unshift(this.pagebtns[0]-1)
                        this.pagebtns.splice(5,1)
                    }
                }
                this.$emit('handleList', this.currentPage)
            }
        }
    }
</script>

<style scoped lang="scss">
    .pageination{
        >button{
            font-size: 14px;
            vertical-align: top;
            padding: 10px 15px;
            line-height: 14px;
            border: 1px solid gray;
            background: #fff;
            &:focus{
                outline: none;
            }
            &:first-child{
                border-top-left-radius: 14px;
                border-bottom-left-radius: 14px;
            }
            &:last-child{
                border-top-right-radius: 14px;
                border-bottom-right-radius: 14px;
            }
        }
        >.currentPage{
            color: #80bd01;
        }

    }
</style>