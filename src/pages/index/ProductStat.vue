<template>
  <div>
    <div class="block">
      <span class="demonstration">时间范围</span>
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></el-date-picker>
      <el-button type="primary">查询</el-button>
    </div>
    <div id="myCharts" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  mounted() {
    var myCharts = echarts.init(document.getElementById("myCharts"));

    var option = {
      title: {
        text: "堆叠区域图"
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985"
          }
        }
      },
      legend: {
        data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        }
      ],
      yAxis: [
        {
          type: "value"
        }
      ],
      series: [
        {
          name: "邮件营销",
          type: "line",
          stack: "总量",
          areaStyle: {},
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: "联盟广告",
          type: "line",
          stack: "总量",
          areaStyle: {},
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: "视频广告",
          type: "line",
          stack: "总量",
          areaStyle: {},
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: "直接访问",
          type: "line",
          stack: "总量",
          areaStyle: {},
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: "搜索引擎",
          type: "line",
          stack: "总量",
          label: {
            normal: {
              show: true,
              position: "top"
            }
          },
          areaStyle: {},
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };

    myCharts.setOption(option);

    // 使用刚指定的配置项和数据显示图表。
  },
  data() {
    return {
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      value1: ''
    };
  },
  methods: {}
};
</script>

<style lang="css" scoped>
span {
  margin-right: 20px;
}
.el-button {
  margin-left: 20px;
  height: 35px;
  line-height: 0;
}
/*
宿命是上帝为你写的剧本
教会你如何去爱去恨
天堂为每个人都打开了大门
善恶是门票不分身份
宿命也是你自己写的剧本
自己选择自己要的人生
信仰就是你心里的指南针

Hey boy
 你看世界用左眼还是右眼
 你对是非的判断是否只有对错之选
  我听说这个时代好像需要信仰
 那你信什么上帝金钱还是你只信英特网
 这世界上有两种人聪明人跟笨蛋
 我两者皆是所以大脑常会混乱
 看前者坐享其成因为笨蛋会找到办法聪明人要做的就是找到笨蛋在哪
 比如军火走私犯被拿下武器全部充公 然后它们又被卖给非洲 或者是中东
 当杀戮发生没法想象场面多么惊人但这时他们又站出来把它放进新闻
 奇怪的是 在新闻里你不会看到不幸你笃定 这是个无比美好的环境
 你也许知道奢侈品的消费利润弹性
 但不会看到多少人为混口饭在玩命



 如果女娲没有造人牛顿 没发现苹果
 如果那些大规模战争还没有停火
那是否 这世界也就不会再有困惑
看那些经历遭遇的人 要如何振作
当你在恼火没有买到 复刻的新鞋
但有人出生就被没收视力还有听觉
 当你在西式餐厅挑剔  螃蟹的个子
 世界的另个角落里有孩子正被饿死
 我没有夸张 只是把现实扒的精光
 让你看它的赤裸看我们也活在冰箱
 一面是冷酷一面 是温暖的欺骗
不断试探它的底线何时 会达到极限
So God bless you 会带你度过每个难关
 要奋力保持往前哪怕 会脚步蹒跚
你生活寒酸 像靠着破船上的栏杆
 希望是指南针信仰是扬起的船帆


 
 */
</style>