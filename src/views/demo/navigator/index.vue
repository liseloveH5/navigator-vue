<template>
  <div class="layout" style="height:100vh" :class="{'layout-hide-text': spanLeft < 4}">
    <Row type="flex" style="height:100%">
      <i-col :span="spanLeft" class="layout-menu-left">
        <Menu active-name="1-1" theme="dark" width="auto" :open-names="['1']" >
          <div class="layout-logo-left">
            <i-button type="text" @click="toggleClick">
              <Icon type="navicon" size="32"></Icon>
            </i-button>
          </div>
          <Submenu name="idx" v-for="(item,idx) in navData" :key="idx">
            <template slot="title" >
              <span class="layout-text"> {{item.label}}</span>
            </template>
            <Menu-item :name="idx + '-'+ index" v-for="(childItem,index) in item.children" :key="index">
              <Icon type="ios-navigate" :size="iconSize"></Icon>
              <span class="layout-text"> {{childItem.label}}</span>
              <div class="nav-child" :class="{'min-width': spanLeft < 4}" v-if="childItem.children">
                <ul>
                  <li v-for="lastItem in childItem.children">{{lastItem.label}}</li>
                </ul>
              </div>
            </Menu-item>
          </Submenu>
        </Menu>
      </i-col>
      <i-col :span="spanRight">
        <div class="layout-header">

        </div>
        <!--<div class="layout-breadcrumb">
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
        </div>-->
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
