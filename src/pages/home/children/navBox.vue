<template>
  <div id="nav-box">
      <div class="row">
          <div class="col-home-nav">
            <div class="home-nav nav-boutique"></div>
            <h4>途风精品</h4>
          </div>
          <div class="col-home-nav">
            <div class="home-nav nav-tour"></div>
            <h4>多日游</h4>
          </div>
          <div class="col-home-nav">
            <div class="home-nav nav-activity"></div>
            <h4>一日游</h4>
          </div>
          <div class="col-home-nav">
            <div class="home-nav nav-customization"></div>
            <h4>定制旅游</h4>
          </div>
      </div>
      <div class="row">
          <div class="col-home-nav">
            <div class="home-nav nav-cruise"></div>
            <h4>邮轮游</h4>
          </div>
          <div class="col-home-nav">
            <div class="home-nav nav-ticket"></div>
            <h4>票务</h4>
          </div>
          <div class="col-home-nav">
            <div class="home-nav nav-visa"></div>
            <h4>签证</h4>
          </div>
          <div class="col-home-nav">
            <div class="home-nav nav-pickup"></div>
            <h4>接送</h4>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
#nav-box{
    position: relative;
    margin: 28px 12px 0;
    overflow: hidden;
    height: auto;
    .row{
        display: flex;
        margin: 16px 0 28px;
        justify-content: space-between;
        .col-home-nav{
            display: block;
            text-align: center;
            padding: 0;
            min-width: 64px;
            .home-nav{
                width: 72px;
                height: 72px;
                margin: 0 auto;
                background-image: url(https://cdn.static.tff.bz/h5mobile/assets/img/home/home2017v5.png);
                background-size: 320px 184px;
                background-repeat: no-repeat;
            }
            .nav-boutique{
              background-position: -144px -72px;
            }
            .nav-tour{
              background-position: 0 -72px;
            }
            .nav-activity{
              background-position: -72px 0;
            }
            .nav-customization{
              background-position: -144px 0;
            }
            .nav-cruise{
              background-position: -216px 0;
            }
            .nav-ticket{
              background-position: -72px -72px;
            }
            .nav-visa{
              background-position: 0 0;
            }
            .nav-pickup{
              background-position: -216px -72px;
            }
            h4{
              margin-bottom: 0;
              margin-top: 0;
              font-size: 14px;
              font-weight: 300;
              color: #363636;
            }
        }
    }
}
</style>