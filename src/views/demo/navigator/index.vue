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
  import index from './index.js'
  export default index
</script>
<style>
  @import "index.css";
</style>
