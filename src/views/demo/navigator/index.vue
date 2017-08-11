<style >
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-menu-left{
    background: #464c5b;
  }
  .layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin:0 auto;
  }
  .layout-logo-left .ivu-btn-text{
    color:#fff;
  }
  .layout-ceiling-main a{
    color: #9ba7b5;
  }
  .layout-hide-text .layout-text{
    display: none;
  }
  .ivu-col{
    transition: width .2s ease-in-out;
  }

  .ivu-menu-dark.ivu-menu-vertical  .ivu-menu-submenu-title {
    height:50px;
  }
  .ivu-menu-submenu-title .layout-text{
    padding-left:20px;
  }
  .ivu-menu-vertical .ivu-menu-submenu-title-icon:before{
    display: none;
  }
  .ivu-menu-opened .ivu-menu-submenu-title-icon {
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  .ivu-menu-submenu-title .ivu-icon{
    float:left;
    margin-left:20px;
    display: inline-block;
    width:0;
    height:0;
    border-top:5px solid transparent;
    border-bottom:5px solid transparent;
    border-left:5px solid #fff;
    border-right:5px solid transparent;
  }

</style>
<template>
  <div class="layout" style="height:100vh" :class="{'layout-hide-text': spanLeft < 5}">
    <Row type="flex" style="height:100%">
      <i-col :span="spanLeft" class="layout-menu-left">
        <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
          <div class="layout-logo-left">
            <i-button type="text" @click="toggleClick">
              <Icon type="navicon" size="32"></Icon>
            </i-button>
          </div>
          <Submenu name="1">
            <template slot="title">
              <span class="layout-text"> 导航一</span>
            </template>
            <Menu-item name="1-1">
              <Icon type="ios-navigate" :size="iconSize"></Icon>
              <span class="layout-text"> 选项 1</span>
            </Menu-item>
            <Menu-item name="1-2">
              <Icon type="ios-navigate" :size="iconSize"></Icon>
              <span class="layout-text"> 选项 2</span>
            </Menu-item>
            <Menu-item name="1-3">
              <Icon type="ios-navigate" :size="iconSize"></Icon>
              <span class="layout-text"> 选项 3</span>
            </Menu-item>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <span class="layout-text">导航二</span>
            </template>
            <Menu-item name="2-1">
              <Icon type="ios-keypad" :size="iconSize"></Icon>
              <span class="layout-text">选项 1</span>
            </Menu-item>
            <Menu-item name="2-2">
              <Icon type="ios-keypad" :size="iconSize"></Icon>
              <span class="layout-text">选项 2</span>
            </Menu-item>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <span class="layout-text">导航三</span>
            </template>
            <Menu-item name="3-1">
              <Icon type="ios-analytics" :size="iconSize"></Icon>
              <span class="layout-text">选项 1</span>
            </Menu-item>
            <Menu-item name="3-2">
              <Icon type="ios-analytics" :size="iconSize"></Icon>
              <span class="layout-text">选项 2</span>
            </Menu-item>
          </Submenu>
        </Menu>
      </i-col>
      <i-col :span="spanRight">
        <div class="layout-header">

        </div>
        <div class="layout-breadcrumb">
          <Breadcrumb>
            <Breadcrumb-item href="#">首页</Breadcrumb-item>
            <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
            <Breadcrumb-item>某应用</Breadcrumb-item>
          </Breadcrumb>
        </div>
        <div class="layout-content">
          <div class="layout-content-main">内容区域</div>
        </div>
        <div class="layout-copy">
          2011-2016 &copy; TalkingData
        </div>
      </i-col>
    </Row>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        spanLeft: 5,
        spanRight: 19
      }
    },
    computed: {
      iconSize () {
        return this.spanLeft === 5 ? 14 : 24;
      }
    },
    methods: {
      toggleClick () {
        if (this.spanLeft === 5) {
          this.spanLeft = 2;
          this.spanRight = 22;
        } else {
          this.spanLeft = 5;
          this.spanRight = 19;
        }
      }
    }
  }
</script>
