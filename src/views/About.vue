<template>
<div id="container">
  <img src="../assets/img/background-02.png" id="img1">
  <div>
   <head-title :is-about="isAbout" style="position: absolute; top: 0; z-index: 11"></head-title>
  </div>

  <sub-title-in-about text="项目介绍"></sub-title-in-about>

  <div class="is-flex" style="margin-top: 80px">
    <img src="../assets/img/goldenWolf.png">
  </div>

  <div class="is-flex" style="margin-top: 50px">
    <div style="display: flex; align-items: center; height: auto ;width:60%; border:2px solid white; ">
        <span style="font-size: 23px; font-weight: normal; text-align: left; padding-right: 20px;padding-left: 20px"><br> &nbsp; &nbsp; &nbsp; &nbsp; 《基于集成学习与深度学习的智能画像拓客系统》搭建了一个包含从潜在目标客户筛选，到用户投资画像分析，到投资组合的个性化定制最后到实时偏好及投资组合更新四个步骤的一体化系统。<br><br>	 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 首先系统将基于公开信息对花旗商业银行可以触及的潜在客户群体在投资意愿、投资能力等方面进行综合筛选，初步圈定适合智能投顾系统提供服务的客户群体并进行针对性宣传。<br><br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 然后对于选择花旗智能投顾系统的客户，在传统问卷基础上结合基本个人信息、财富资产信息、投资偏好信息、生活场景信息等，和顾客与虚拟人像交流时的语言等个性化信息为顾客精确刻画个人投资偏好、风险承受以及回报周期等。<br><br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 再次，利用深度学习等人工智能技术根据客户画像匹配对应的投资组合，并在不涉及商业机密的前提下尽可能对客户对投资组合的构建过程以及内容信息公开。<br><br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 最后，在顾客的问卷以及可获取的多维度个人信息发生变化后，系统将用匹配算法实时更新投资组合的构建。<br><br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 该系统系列化地提供了从获客到精准服务客户的投资顾问服务，具有广泛筛选、精准定位、个性推荐、实时更新等优点，预计将从根本上解决现存市面上智能投顾系统刻板化、模式化、缺乏定制化分析以及信息更新迟缓等问题。<br><br></span>
    </div>
  </div>

  <sub-title-in-about text="整体架构" style="margin-top: 70px; margin-bottom: 80px"></sub-title-in-about>

  <div class="is-flex" style="overflow:hidden ">
    <div style=" align-items: center; height: 550px ;width:300px; border:2px solid white;
                 position: relative; left: 170px" >
      <img src="../assets/img/maskImg.png" style="width: 100%; height: auto; margin: 0 auto">
    </div>
<!--    TODO：加上跳转quiz路由-->
<img style="width: 200px;height: auto;position: relative; left: 190px; bottom: 14px"
                                  src="../assets/icon/+.png">

    <img  style=" width:1200px;height:600px; margin-right: 100px"
          src="../assets/img/consultant-null.png">
  </div>

  <sub-title-in-about text="组件介绍" style="margin-top: 50px; margin-bottom: 30px;"></sub-title-in-about>

  <div class="is-flex" style=" justify-content: center;flex-wrap: wrap">

  <div style="margin-top: 30px">
    <component-description title="信息采集" :text="text1" style="text-align: left"></component-description>
    <component-description title="学习分析" :text="text2" style="text-align: left; padding-top: 30px"></component-description>
  </div>

<!--    <div style="height: 30px;"></div>-->

    <div style="margin-top: 30px">
    <component-description title="计算配置" :text="text3" style="text-align: left; padding-left: 20px"></component-description>
    <component-description title="数据储备" :text="text4" style="text-align: left; padding-top: 30px;padding-left: 20px"></component-description>
  </div>

  </div>
 </div>

  <sub-title-in-about text="队伍成员" style="margin-bottom: 50px">

  </sub-title-in-about>

  <div class="is-flex" style="margin: 0 auto; width: 1100px;">
    <div>
           <div style=" border:1px transparent solid; height: 540px; width:350px; border-radius: 30px; background: rgba(36, 34, 26,0.7)" >
              <img style="margin-top:20px;max-width: 150px" :src="member.yxw">
              <br>
              <span style="display:inline-block; margin-top: 10px; font-size: 30px"> 杨学伟</span>
             <span style="line-height: 25px; font-weight: normal; display:inline-block;margin-top: 10px; font-size: 16.5px; padding-left: 10px;padding-right: 10px; text-align: left"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 南京大学教授，博士生导师，金融工程研究中心副主任。南开大学理学博士，香港城市大学经济与金融系博士后，美国加州大学（洛杉矶）Anderson 管理学院、美国伊利诺伊大学（UIUC）和香港科技大学访问学者，中国管理现代化研究会金融管理委员会副秘书长。主要研究兴趣包括金融衍生品创新与监管，行为金融，金融科技与大数据挖掘，信用（违约）风险定价与管理等，主持国家级科研项目 4 项。目前担任中文期刊《运筹与管理》“金融工程”分区编委。</span>
           </div>

    </div>

    <div style="display:flex; flex-wrap: wrap ">
            <small-member-tag :content="intro.chy" :url="member.chy" :name="name.chy" class="member-tag"></small-member-tag>
            <small-member-tag :content="intro.cjz" :url="member.cjz" :name="name.cjz" class="member-tag" style="background: rgb(7,7,7,0.7)"></small-member-tag>
            <small-member-tag :content="intro.ckw" :url="member.ckw" :name="name.ckw" class="member-tag" ></small-member-tag>
            <small-member-tag :content="intro.czj" :url="member.czj" :name="name.czj" class="member-tag" style="background: rgb(7,7,7,0.7)"></small-member-tag>

      <small-member-tag :content="intro.dzy" :url="member.dzy" :name="name.dzy" class="member-tag"></small-member-tag>
      <small-member-tag :content="intro.gjc" :url="member.gjc" :name="name.gjc" class="member-tag"  style="background: rgb(7,7,7,0.7)"></small-member-tag>
      <small-member-tag :content="intro.gl" :url="member.gl" :name="name.gl" class="member-tag" style="background: rgb(7,7,7,0.7)"></small-member-tag>
      <small-member-tag :content="intro.hml" :url="member.hml" :name="name.hml" class="member-tag"></small-member-tag>

      <small-member-tag :content="intro.ljj" :url="member.ljj" :name="name.ljj" class="member-tag"  style="background: rgb(7,7,7,0.7)"></small-member-tag>
      <small-member-tag :content="intro.lx" :url="member.lx" :name="name.lx" class="member-tag"></small-member-tag>
      <small-member-tag :content="intro.lmy" :url="member.lmy" :name="name.lmy" class="member-tag" style="background: rgb(7,7,7,0.7)"></small-member-tag>
      <small-member-tag :content="intro.ltf" :url="member.ltf" :name="name.ltf" class="member-tag"></small-member-tag>

      <small-member-tag :content="intro.ofs" :url="member.ofs" :name="name.ofs" class="member-tag" ></small-member-tag>
      <small-member-tag :content="intro.pjz" :url="member.pjz" :name="name.pjz" class="member-tag" style="background: rgb(7,7,7,0.7)"></small-member-tag>
      <small-member-tag :content="intro.wy" :url="member.wy" :name="name.wy" class="member-tag"></small-member-tag>
      <small-member-tag :content="intro.ymy" :url="member.ymy" :name="name.ymy" class="member-tag" style="background: rgb(7,7,7,0.7)"></small-member-tag>
      <small-member-tag :content="intro.zy" :url="member.zy" :name="name.zy" class="member-tag"></small-member-tag>
    </div>


<!--    <div style="display:flex;  flex-wrap: wrap">-->
<!--      <small-member-tag class="member-tag"></small-member-tag>-->
<!--      <small-member-tag class="member-tag" style="background: rgb(7,7,7,0.7)"></small-member-tag>-->
<!--      <small-member-tag class="member-tag" style="background: rgb(7,7,7,0.7)"></small-member-tag>-->
<!--      <small-member-tag class="member-tag"></small-member-tag>-->
<!--    </div>-->



  </div>

  <div style="margin-top: 100px">
  <FootTitle ></FootTitle>
  </div>
</template>

<script>
import HeadTitle from "@/components/HeadTitle";
import subTitleInAbout from "@/components/aboutComponents/subTitleInAbout";
import componentDescription from "@/components/aboutComponents/componentDescription";
import smallMemberTag from "@/components/aboutComponents/smallMemberTag";
import FootTitle from "@/components/FootTitle";

export default {
  name: "About",
  components:{ HeadTitle,subTitleInAbout,componentDescription,smallMemberTag,FootTitle },
  data: function () {
    return {
      member: {
        chy: require('../assets/pht/曹恒源.png'),
        cjz: require('../assets/pht/陈家志.png'),
        ckw: require('../assets/pht/陈凯文.png'),
        czj: require('../assets/pht/陈梓骏.png'),
        dzy: require('../assets/pht/戴智毅.png'),
        gjc: require('../assets/pht/葛家辰.png'),
        gl: require('../assets/pht/顾龙.png'),
        hml: require('../assets/pht/黄美玲.png'),
        yxw: require('../assets/pht/教授 杨学伟.png'),
        ljj: require('../assets/pht/林均劼.png'),
        lx: require('../assets/pht/林欣.png'),
        lmy: require('../assets/pht/刘慕尧.png'),
        ltf: require('../assets/pht/刘庭烽.png'),
        ofs: require('../assets/pht/欧丰硕.png'),
        pjz: require('../assets/pht/彭俊植.png'),
        wy: require('../assets/pht/王岳.png'),
        ymy: require('../assets/pht/于明轶.png'),
        zy: require('../assets/pht/郑义.png'),
      },
      name :{
        chy: '曹恒源',
        cjz: '陈家志',
        ckw: '陈凯文',
        czj: '陈梓俊',
        dzy: '戴智毅',
        gjc: '葛家辰',
        gl: '顾龙',
        hml: '黄美玲',
        ljj: '林均劼',
        lx: '林欣',
        lmy: '刘慕尧',
        ltf: '刘庭烽',
        ofs: '欧丰硕',
        pjz: '彭俊植',
        wy: '王岳',
        ymy: '于明轶',
        zy: '郑义',
      },
      intro: {
        chy: '南京大学匡亚明学院计算机科学与技术方向大三学生。熟悉机器学习、深度学习相关算法和实现，多次参加各种机器学习、深度学习相关比赛，在本次花旗杯中担任算法组成员，给团队提供机器学习和深度学习的帮助。',
        ymy: '南京大学2020级计算机与金融工程实验班班长，担任本次队伍队长。有较为扎实的数学功底与Python，C++编程经验，为团队提供建模与算法支持；有丰富的管理协作经验，为团队提供协调沟通的帮助；有一定的UI设计基础，为团队前端页面提供版面设计。',
        lx: '南京大学商学院财务管理专业大二学生，院学生会文化发展部部长，南京大学本科招生办全媒体中心栏目主编，曾获83经济奖学金。熟悉财务分析与预测，在此次项目中参与商业组前期框架搭建工作，主要负责市场营销策略分析及财务分析。',
        hml: '南京大学商学院工商管理专业大二学生，曾获国家奖学金、南京大学优秀学生等荣誉，南京大学辩论协会副会长，多次在案例分析类商业比赛中获得名次，熟悉市场分析和商业模式分析，在本次项目中负责项目框架搭建及项目核心竞争力分析。',
        ofs: '南京大学人工智能专业大二学生。熟悉故事线搭建、商业计划书撰写纷纷内容，具有在头部战略咨询公司、准头部FA、四大会计师事务所以及风险投资机构的实习经历并在案例分析类商赛中多次取得名次，在本次项目中负责项目框架搭建、金融模型构建等。',
        dzy: '南京大学商学院金融工程专业大二学生，南京大学金融工程协会成员，拥有券商投行部与互联网科技公司数据分析岗实习经历，熟悉Python，Matlab，SQL等语言，在本次最终产品中负责资产配置模型的搭建。',
        lmy: '南京大学商学院经济学专业20级学生，辅修电子商务专业，曾于头部咨询公司、政府研究机构与头部美元VC实习，于新加坡国立大学参与量化交易策略研究助理工作，具有丰富的商赛及实习经验与金融知识储备。在本项目中负责商业组相关分析工作。',
        ljj: '南京大学软件学院软件工程系大三学生。熟悉使用java，c++和python语言，同时具有java后端开发和人工智能算法设计经验，曾在南京大学软件学院学生会中担任部门负责人，具有较强的组织协调能力，在本次项目中担任算法组开发人员并负责协调算法组与软件组的对接工作。',
        wy: '南京大学计算机科学与技术系大三学生，熟悉Python，C++等语言，有较多项目开发经验。大一到大三期间参加过阿里天池算法大赛，南京大学NLP本科生夏令营等活动，并多次获得奖学金，同时了解机器学习及深度学习相关内容。在本次项目中负责算法部分的具体实现，包括完成商业组理论模型的实现工作和软件组调用算法模块的对接要求。',
        czj: '南京大学软件学院软件工程专业大三学生。了解前后端开发框架如Spring与Vue，有较多项目开发经验，了解软件开发过程规范，善于组织规划开发进度。在本项目中担任软件前端开发。',
        pjz: '南京大学软件工程专业大二学生，曾获国家奖学金、校社会实践十佳个人等荣誉。掌握SpringBoot、Vue等主流开发框架，课内外项目经验丰富，参与大创开发项目并与企业达成合作，同时任软件学院2020级年级长、青协副主席，曾作为队长带领团队开发一站式信息平台获江苏省级优秀实践团队荣誉，具有良好的组织沟通能力，在本项目中负责前端开发和前端、UI的组织对接工作。',
        zy: '南京大学软件学院软件工程系大二学生。擅长 Java 语言和后端Web开发，有较多项目开发经验，了解软件开发流程，同时担任南京大学开甲书院学生会主席，有较强的规划和组织能力，在本次项目中担任软件组后端开发成员。',
        gjc: '南京大学软件学院软件工程专业大二学生。对前端有一定了解，担任南京大学开甲书院新媒体中心主席，曾多次负责院级美术设计及宣传任务，在本次项目中负责网页设计及媒体宣传工作。',
        gl: '南京大学软件学院大三在读。了解面向对象的程序设计方法，有较多项目开发经验。曾参加华东Hackathon比赛获得三等奖，并多次获得奖学金。在本项目中担任前端开发，负责页面开发和对接后端接口。',
        cjz: '南京大学软件学院软件工程系大三学生。熟悉Java系开发及Linux系统，有较多项目开发及产品部署交付的经验，了解软件开发流程，具备相应工程素养。在本次项目中担任后端开发，负责虚拟化环境的构建，持续集成服务的搭建，理财产品信息的获取与整理。',
        ltf: '南京大学软件学院软件工程专业大三学生。曾获得国家奖学金等多项奖学金，具有丰富的计算机知识储备，多次参与创新创业项目，具备大型软件开发经验。曾担任南京大学开甲书院团学联副主席、团总支副书记，有较强的规划和组织能力。在本次项目中，初期主要负责商业组和技术组的对接，后期主要负责前端开发。',
        ckw: '南京大学软件工程专业大二学生。熟悉Java语言与常用后端开发框架，深入理解面向对象的软件设计模式，熟悉HTML，CSS，Javascript等语言与常用前端开发框架，有独立开发完整项目并上线的经验，熟悉软件开发流程，适应团队协作开发。在本项目中主要负责后端部分的开发，同时解决了一部分前端开发任务。',
      },
      isAbout: this.$store.state.headerViews === 'About',
      text1: '通过语音识别与智能文本分析，系统会自动为您挑选合适的问题，这些问题将覆盖您的日常生活以及投资经验。',
      text2: '我们使用Xgboost等学习模型，对您的回答进行了学习并提取了关键的敏感信息，模型的输出结果将会对资产配置产生决定性影响。',
      text3: '通过BL模型、风险平价模型和动量模型等配置手段，我们将为您逐层推荐投资产品及其权重，从宏观到精细，尽在系统考虑之中。',
      text4: '我们储备了期货、股票、债券、黄金相关的大量交易数据，通过对其的处理分析和简化，我们将为您呈现最直观的投资推荐结果。',
    }
  },
  beforeCreate() {
    this.$store.commit('changeViews', 'About')
  }
}
</script>

<style scoped>
#img1{
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center bottom;
  display: block;
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  z-index:-11
}
span{
  font-family: 'Adobe Arabic';
  font-size: 40px;
  font-weight: bold;
  color: white;
}
/*.text-intro {*/
/*  !*background:linear-gradient(to left,#FFFFFF,#b6b6b6,#FFFFFF);*!*/
/*  margin-top: 150px;*/
/*  border: 0;*/
/*  border-top: 4px solid #e5aa1b;*/
/*  border-style: double;*/
/*  text-align: center;*/
/*}*/

.is-flex{
  display: flex;
    justify-content: center;
    align-items: center;
}
.subTitle-img{
  height: 7px;
  margin-left: 25px;
  margin-right: 25px;
}

.member-tag{
  margin-left:20px;
}
</style>
