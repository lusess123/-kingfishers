//体检中心
import basewedPageFile = require("./../04page/BaseWebPage");
import _reg = basewedPageFile._reg;
//个人预约登记
_reg("ExamOrderPage", "Medical/MemberExam/examOrderPage");
_reg("EditExamOrderPage", "Medical/MemberExam/EditExamOrderPage");

//团体预约登记
_reg("MemberUpdatePage", "Medical/Base/Member/Update/MemberUpdatePage");
_reg("GroupListPage", "Medical/GroupExam/Group/List/GroupListPage");
_reg("NewGroupPage", "Medical/GroupExam/Group/New/NewGroupPage");
_reg("EditGroupPage", "Medical/GroupExam/Group/Edit/EditGroupPage");

_reg("InitGroupTreePage", "Medical/GroupExam/Group/List/InitGroupTreePage");
_reg("BatchNewPage", "Medical/GroupExam/Group/BatchNew/BatchNewPage");
_reg("NewMemberPage", "Medical/GroupExam/Group/NewMember/NewMemberPage");
_reg("GroupManagePage", "Medical/GroupExam/Group/Manage/GroupManagePage");
_reg("UpdateAccountPAGE", "Medical/GroupExam/Group/UpdateAccount/UpdateAccountPAGE");

//科室录入
_reg("DepartmentEntryPage", "Medical/Departments/List/DepartmentEntryPage");
_reg("DepartmentInsertPage", "Medical/Departments/Insert/DeparementInsertPage");
_reg("DEPARTMENTIMAGEPAGE", "Medical/Departments/List/DepartmentImagePage");
//总检
_reg("DetectionListPage", "Medical/TotalDetection/List/DetectionListPage");
_reg("DetectionInsertPage", "Medical/TotalDetection/Insert/DetectionInsertPage");
//TOTALDETACIONIMAGEPAGE
_reg("TOTALDETACIONIMAGEPAGE", "Medical/TotalDetection/Insert/TotalDetacionImagePage");
//缴费页面
_reg("PERSONPAYMENTPAGE", "Medical/Charge/PersonPayment/PersonPaymentPage");
_reg("TeamPayMentPAGE", "Medical/Charge/TeamPayeMent/TeamPayMentPage");
_reg("PERSONCHARGEPAGE", "Medical/Charge/PersonChargeList/PersonChargePage");
_reg("TEAMCHARGEPAGE", "Medical/Charge/TeamChargeList/TeamChargePage");
_reg("PERSONITEMDETAILPAGE", "Medical/Charge/Personrefund/PersonItemDetailPage");
_reg("PERSONREFUNDPAGE", "Medical/Charge/Personrefund/PersonrefundPage");
_reg("TEAMREFUNDPAGE", "Medical/Charge/Teamrefund/TeamRefundPage");
//TEAMREFUNDPAGE  TEAMDETAILPAGE
_reg("TEAMDETAILPAGE", "Medical/Charge/Teamrefund/TeamDetailPage");
//工作台
_reg("WorkBenchPage", "Medical/Workbench/WorkBenchPage");

//统计
_reg("CensusDoctorListPage", "Medical/Count/CensusDoctor/List/CensusDoctorListPage");
_reg("CensusDieaseListPage", "Medical/Count/CensusDiease/List/CensusDieaseListPage");

//静态页面
_reg("PersonalListPage", "Medical/HDZ/Personal/PersonalListPage");
_reg("NewOrderPage", "Medical/HDZ/Personal/NewOrderPage");
_reg("PersonalNewPage", "Medical/HDZ/Personal/New/PersonalNewPage");
//_reg("GroupListPage", "Medical/HDZ/Group/List/GroupListPage");

_reg("MoneyListPage", "Medical/HDZ/Money/MoneyListPage");
_reg("PayListPage", "Medical/HDZ/Money/PayList/PayListPage");
