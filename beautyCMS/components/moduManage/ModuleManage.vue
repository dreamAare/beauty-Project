<template>
<div>
  <SmallHead v-bind:urlObj="nameObj"></SmallHead>
  <div>
    <template>
      <el-tabs :tab-position="tabPosition" style="margin-top: 20px">
        <el-tab-pane>
          <span slot="label">首页</span>
          <div style="margin-top: 50px">
            <el-select v-model="pageModel" placeholder="请选择页面模块" @change="imgListItem">
              <el-option v-for="item in pageModelArr" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </div>
          <div style="margin-top: 50px">
            <el-table :data="indexData" border style="margin-left: 50px;">
              <el-table-column prop="si_id" label="ID"></el-table-column>
              <el-table-column label="图片" style="text-align: center">
                <template slot-scope="scope">
                  <img :src="scope.row.si_src" alt="这是图片"  height="80" />
                </template>
              </el-table-column>
              <el-table-column prop="si_src" label="路径"></el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.$index,scope.row)" type="primary">修改图片</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="lookbook">
          <div style="margin-top: 50px">
            <el-select v-model="pageModel" placeholder="请选择页面模块">
              <el-option v-for="item in pageModelArr" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </div>
          <div style="margin-top: 50px">
            <el-table :data="lookbookData" border style="margin-left: 50px;">
              <el-table-column prop="id" label="ID"></el-table-column>
              <el-table-column label="图片" style="text-align: center">
                <template slot-scope="scope">
                  <img :src="scope.row.imgUrl" alt="这是图片"  height="80" />
                </template>
              </el-table-column>
              <el-table-column prop="imgUrl" label="路径"></el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="primary">修改图片</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="new&best">
          <div style="margin-top: 50px">
            <el-select v-model="pageModel" placeholder="请选择页面模块">
              <el-option v-for="item in pageModelArr" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </div>
          <div style="margin-top: 50px">
            <el-table :data="newbestData" border style="margin-left: 50px;">
              <el-table-column prop="id" label="ID"></el-table-column>
              <el-table-column label="图片" style="text-align: center">
                <template slot-scope="scope">
                  <img :src="scope.row.imgUrl" alt="这是图片"  height="80" />
                </template>
              </el-table-column>
              <el-table-column prop="imgUrl" label="路径"></el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="primary">修改图片</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
      </el-tabs>
    </template>
  </div>
</div>
</template>
<script>
import SmallHead from '../common/SamllHead'
export default {
  name: 'ModuleManage',
  components: {
    SmallHead
  },
  methods: {
    handleClick(itemIndex,e) {
      // console.log(itemIndex,e)
      var that = this;
      this.$alert('<form id="uploadform"  enctype="multipart/form-data">' +
        '<div class="myupload">' +
          '<i class="el-icon-plus myplus"></i>' +
          '<input type="file" name="photo" id="photo" class="change">' +
        '</div>' +
        '</form>', '上传图片', {
        dangerouslyUseHTMLString: true,
        showCancelButton: true,
        confirmButtonText: '上传到服务器',
        cancelButtonText: '取消上传'
      }).then((action) => {
        var formData = new FormData(document.getElementById('uploadform'))
        if (formData.get('photo').name){
          formData.append('si_id',e.si_id)
          formData.append('si_moduleid',e.si_moduleid)
          formData.append('si_pageid',e.si_pageid)
          var config = {headers:{'Content-Type':'multipart/form-data'}}
          this.$http.post('/ipa/index/imgUpload',formData,config)
            .then(function (res) {
              // console.log(res.data)
              // console.log(typeof res.data)
              var itemData = {
                si_id: e.si_id,
                si_src: res.data,
                si_pageid: e.si_pageid,
                si_moduleid: e.si_moduleid
              }
              that.indexData.splice(itemIndex,1,itemData)
            })
        } else {
          console.log('请选择文件')
        }

      }).catch((err) => {
        // console.log(err)
      })


    },
    imgListItem(e) {
      // console.log(e)
      var that = this;
      this.$http({method: 'post', url: '/api/moduManage/slideImg', data:{modeId: e}})
        .then(function (res) {
          // console.log(res.data)
          that.indexData = res.data;
        }).catch(function (err) {
        console.log(err)
      })

    },
  },
  data: function () {
    return {
      tabPosition: 'top',
      pageModelArr: [
        {
          value: 1,
          label: '模块一'
        },
        {
          value: 2,
          label: '模块二'
        },
        {
          value: 3,
          label: '模块三'
        }
      ],
      pageModel: '',
      indexData: [
        // {
        //   id: 1,
        //   imgUrl: '/static/lrz/index1_1.jpg',
        //   pageId: 1,
        //   moduleId: 1
        // },
        // {
        //   id: 2,
        //   imgUrl: '/static/lrz/index1_2.jpg',
        //   pageId: 1,
        //   moduleId: 1
        // },
        // {
        //   id: 3,
        //   imgUrl: '/static/lrz/index2_1.png',
        //   pageId: 1,
        //   moduleId: 2
        // },
        // {
        //   id: 4,
        //   imgUrl: '/static/lrz/index2_2.png',
        //   pageId: 1,
        //   moduleId: 2
        // },
        // {
        //   id: 5,
        //   imgUrl: '/static/lrz/index3_1.jpg',
        //   pageId: 1,
        //   moduleId: 3
        // },
        // {
        //   id: 6,
        //   imgUrl: '/static/lrz/index3_2.jpg',
        //   pageId: 1,
        //   moduleId: 3
        // }
      ],
      lookbookData: [
        {
          id: 7,
          imgUrl: '/static/lrz/look1_1.jpg',
          pageId: 2,
          moduleId: 1
        },
        {
          id: 8,
          imgUrl: '/static/lrz/look1_2.jpg',
          pageId: 2,
          moduleId: 1
        },
        {
          id: 9,
          imgUrl: '/static/lrz/look2_1.jpg',
          pageId: 2,
          moduleId: 2
        },
        {
          id: 10,
          imgUrl: '/static/lrz/look2_2.jpg',
          pageId: 2,
          moduleId: 2
        },
        {
          id: 11,
          imgUrl: '/static/lrz/look3_1.jpg',
          pageId: 2,
          moduleId: 3
        },
        {
          id: 12,
          imgUrl: '/static/lrz/look3_2.jpg',
          pageId: 2,
          moduleId: 3
        }
      ],
      newbestData: [
        {
          id: 1,
          imgUrl: '/static/lrz/test3.jpg'
        },
        {
          id: 2,
          imgUrl: '/static/lrz/test4.jpg'
        }
      ],
      imgSrc: '',
      nameObj: {
        name1:'模块管理',
        // name2:'发货管理'
      },
    }
  },
  created() {
    var that = this;
    // 请求服务器，传参数，以及一些逻辑，得到服务器返回的数据，并修改indexData
    this.$http.post('/api/moduManage/slideImg')
      .then(function (res) {
        // console.log(res.data)
        that.indexData = res.data;
      })
    // this.indexData = resData
  }
}
</script>

<style>
  .el-select{
    margin-left: 50px;
  }
  .el-table .el-table_1_column_2  {
    text-align: center;
  }
  .el-table .el-table_2_column_6  {
    text-align: center;
  }
  .el-table .el-table_3_column_10  {
    text-align: center;
  }
  .myupload{
    position: relative;
    width: 100%;
    height: 200px;
    /*background-color: #00B7FF;*/
  }
  .myupload>input{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
  }
  .myplus{
    font-size: 28px;
    color: #20a8d8;
    width: 200px;
    height: 200px;
    line-height: 200px;
    text-align: center;
    border: solid 1px #3ea5d8;
    border-radius: 10px;
  }

</style>
