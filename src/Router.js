import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
import { history } from "./history"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import Spinner from "./components/core/spinner/Loading-spinner"
import { ContextLayout } from "./utility/context/Layout"


import { ToastProvider } from "react-toast-notifications";
import AdmissionGetData from "./views/Test/AdmissionGetData"


import {permissionList} from './constants/AuthorizationConstant'

console.log('testing',permissionList,'testing');



console.log(typeof(permissionList?.Employee_type));

// Authentication Checking
const token = localStorage.getItem('token');
const permissions= JSON.parse(localStorage.getItem('permissions'));
// console.log(typeof(permissions),'1111111');
// console.log(permissions);
const isAuth = token != null ? true : false;
const permission = JSON.parse(localStorage.getItem("current_user"));
  // console.log(permission?.displayName);

// Route-based code splitting
const analyticsDashboard = lazy(() =>
  import("./views/dashboard/analytics/AnalyticsDashboard")
)

const select = lazy(() => import("./views/forms/form-elements/select/Select"))
const switchComponent = lazy(() =>
  import("./views/forms/form-elements/switch/Switch")
)
const checkbox = lazy(() =>
  import("./views/forms/form-elements/checkboxes/Checkboxes")
)
const radio = lazy(() => import("./views/forms/form-elements/radio/Radio"))
const input = lazy(() => import("./views/forms/form-elements/input/Input"))
const group = lazy(() =>
  import("./views/forms/form-elements/input-groups/InputGoups")
)
const numberInput = lazy(() =>
  import("./views/forms/form-elements/number-input/NumberInput")
)
const textarea = lazy(() =>
  import("./views/forms/form-elements/textarea/Textarea")
)
const pickers = lazy(() =>
  import("./views/forms/form-elements/datepicker/Pickers")
)
const inputMask = lazy(() =>
  import("./views/forms/form-elements/input-mask/InputMask")
)
const layout = lazy(() => import("./views/forms/form-layouts/FormLayouts"))
const formik = lazy(() => import("./views/forms/formik/Formik"))

 // Desk Client Component
const countryList = lazy(()=>import("./views/core/country/pages/index"))
const designationList = lazy(()=>import("./views/core/designation/pages/index"))
const companyBranchList =lazy(()=>import("./views/company/companyBranch/pages/index"))
const companyContactInformation =lazy(()=>import("./views/company/companyContactInformaiton/pages/index"))
const companyInformation =lazy(()=>import("./views/company/companyInformation/pages/index"))
const noticeItemList =lazy(()=>import("./views/notice/noticeItem/pages/index"))
const noticeForEmployeeList =lazy(()=>import("./views/notice/noticeForEmployee/pages/index"))
const cityList =lazy(()=>import("./views/core/city/pages/index"))
const stateList =lazy(()=>import("./views/core/state/pages/index"))
const jobCircularList =lazy(()=>import("./views/recruitments/jobCircular/pages/index"))
const applicationList =lazy(()=>import("./views/recruitments/application/pages/index"))
const clientList =lazy(()=>import("./views/clients/client/pages/index"))
const clientTypeList =lazy(()=>import("./views/clients/clientType/pages/index"))
// SMS Client Component

// const AdmissionManager = lazy(() => import("./views/Test/AdmissionManager"))

const Roles = lazy(() => import("./views/SMS/Configuration/Roles/Roles.jsx"))
const Menu = lazy(() => import("./views/SMS/Configuration/Menu/Menu.jsx"))

const RolePermission = lazy(() => import("./views/SMS/Configuration/Permissions/RolePermission.jsx"))
const RoleMenu = lazy(() => import("./views/SMS/Configuration/Menu/RoleMenu.jsx"))
const EmployeeType = lazy(() => import("./views/SMS/Configuration/Employees/EmployeeType.jsx"))
const EmployeeGeneralInfo = lazy(() => import("./views/SMS/Configuration/Employees/EmployeeGeneralInfo.jsx"))
const EmployeeContactInfo = lazy(() => import("./views/SMS/Configuration/Employees/EmployeeContactInfo.jsx"))
const EmployeeList = lazy(() => import("./views/SMS/Configuration/Employees/EmployeeList.jsx"))
const EmployeeProfile = lazy(() => import("./views/SMS/Configuration/Employees/EmployeeProfile.jsx"))
const AddUniversityType = lazy(() => import("./views/SMS/University/AddUniversityType.jsx"))
const AddUniversityCountry = lazy(() => import("./views/SMS/University/AddUniversityCountry.jsx"))
const AddUniversityState = lazy(() => import("./views/SMS/University/AddUniversityState.jsx"))
const AddUniversity = lazy(() => import("./views/SMS/University/AddUniversity.jsx"))

const AddUniversityCampus = lazy(() => import("./views/SMS/University/AddUniversityCampus.jsx"))
const EditDepartment = lazy(() => import("./views/SMS/UniversitySubjects/EditDepartment"))
const EditSubDepartment = lazy(() => import("./views/SMS/UniversitySubjects/EditSubDepartment"))
const AddUniversityFinancial = lazy(() => import("./views/SMS/University/AddUniversityFinancial.jsx"))
const AddUniversityFeatures = lazy(() => import("./views/SMS/University/AddUniversityFeatures.jsx"))
const UniversityList = lazy(() => import("./views/SMS/University/UniversityList.jsx"))
const UniversityDetails = lazy(() => import("./views/SMS/University/UniversityDetails.jsx"))
const CampusList = lazy(() => import("./views/SMS/University/CampusList.jsx"))
const CampusDetails = lazy(() => import("./views/SMS/University/CampusDetails.jsx"))
const CampusSubjectList = lazy(() => import("./views/SMS/University/CampusSubjectList.jsx"))
const AddUniversityGallery = lazy(() => import("./views/SMS/University/AddUniversityGallery.jsx"))
const AddUniversityTemplateDocument = lazy(() => import("./views/SMS/University/AddUniversityTemplateDocument"))
const AddUniversityApplicationDocument = lazy(() => import("./views/SMS/University/AddUniversityApplicationDocument"))
const UniversityRecquiredDocument = lazy(() => import("./views/SMS/University/UniversityRecquiredDocument"))

// intake
const Intake = lazy(() => import("./views/SMS/University/Intake.js"))
const AddNewIntakes = lazy(() => import("./views/SMS/University/AddNewIntakes.jsx"))
const UpdateIntake = lazy(() => import("./views/SMS/University/UpdateIntake.jsx"))

// consultant
const ConsultantList = lazy(() => import("./views/SMS/Consultant/ConsultantList"))
const ConsultantProfile = lazy(() => import("./views/SMS/Consultant/ConsultantProfile"))
const AddConsultant = lazy(() => import("./views/SMS/Consultant/AddConsultant"))
const AddConsultantType = lazy(() => import("./views/SMS/Consultant/AddConsultantType"))

const BankDetails = lazy(() => import("./views/SMS/Consultant/BankDetails"))
const AddConsultantInformation = lazy(() => import("./views/SMS/Consultant/AddConsultantInformation"))
const AssociateList = lazy(() => import("./views/SMS/Consultant/ConsultantByConsultant"))

// Document
const DocumentList = lazy(() => import("./views/SMS/Document/DocumentList.js"))
const DocumentCategoryList = lazy(() => import("./views/SMS/Document/DocumentcategoryList.js"))

// University Subject
const AddDepartment = lazy(() => import("./views/SMS/UniversitySubjects/Department.jsx"))
const AddSubDepartment = lazy(() => import("./views/SMS/UniversitySubjects/SubDepartment.jsx"))
const AddProgramLevel = lazy(() => import("./views/SMS/UniversitySubjects/ProgramLevel.jsx"))
const Subject = lazy(() => import("./views/SMS/UniversitySubjects/Subject.jsx"))
const SubjectList = lazy(() => import("./views/SMS/UniversitySubjects/SubjectList.jsx"))
const DocumentGroup = lazy(() => import("./views/SMS/UniversitySubjects/DocumentGroup.js"))
const AddSubjectFee = lazy(() => import("./views/SMS/UniversitySubjects/AddSubjectFee.jsx"))
const AddSubjectDeliveryPattern = lazy(() => import("./views/SMS/UniversitySubjects/AddSubjectDeliveryPattern"))
const AddSubjectDocumentRequirement = lazy(() => import("./views/SMS/UniversitySubjects/AddSubjectDocumentRequirement"))
const EditSubjectDocumentRequirement = lazy(() => import("./views/SMS/UniversitySubjects/EditSubjectDocumentRequirement"))
const AddSubjectRequirements = lazy(() => import("./views/SMS/UniversitySubjects/AddSubjectRequirements"))
const EditSubjectRequirements = lazy(() => import("./views/SMS/UniversitySubjects/EditSubjectRequirements"))
const SubjectFeeInformation = lazy(() => import("./views/SMS/UniversitySubjects/SubjectFeeInformation.jsx"))
const EditSubject = lazy(() => import("./views/SMS/UniversitySubjects/EditSubject.jsx"))
const EditSubjectFee = lazy(() => import("./views/SMS/UniversitySubjects/EditSubjectFee.jsx"))
const EditDeliveryPattern = lazy(() => import("./views/SMS/UniversitySubjects/EditDeliveryPattern"))
const SubjectIntake =  lazy(() => import("./views/SMS/UniversitySubjects/SubjectIntake.jsx"))
const SubjectProfile =  lazy(() => import("./views/SMS/UniversitySubjects/SubjectProfile.js"))

// country List
const AddCountry = lazy(() => import("./views/SMS/Country/AddCountry"))

// State List
const AddState = lazy(() => import("./views/SMS/State/AddState"))

// file upload
const FileUpload =  lazy(() => import("./views/SMS/UniversitySubjects/FileUpload.js"))

// Applications
const Applications = lazy(() => import("./views/SMS/Applications/Applications.js"));
const ApplicationDetails = lazy(() => import("./views/SMS/Applications/ApplicationDetails.js"));


// const Pagination = lazy(() => import("./views/SMS/Pagination/Pagination.jsx"))

// const Login = lazy(() => import("./views/SMS/Login/Login.jsx"))


const forgotPassword = lazy(() =>
  import("./views/pages/authentication/ForgotPassword")
)
const lockScreen = lazy(() => import("./views/pages/authentication/LockScreen"))
const resetPassword = lazy(() =>
  import("./views/pages/authentication/ResetPassword")
)
const StudentRegister = lazy(() =>
  import("./views/pages/authentication/register/StudentRegister")
)
const ConsultantRegister = lazy(() =>
  import("./views/pages/authentication/register/ConsultantRegister")
)
const ProviderRegister = lazy(() =>
  import("./views/pages/authentication/register/ProviderRegister")
)
const accessControl = lazy(() =>
  import("./extensions/access-control/AccessControl")
)
const notFound = lazy(() =>
  import("./views/pages/misc/error/404")
)

const InternalServerError = lazy(() =>
  import("./views/pages/misc/error/500")
)

const NotAuthorized = lazy(() =>
  import("./views/pages/misc/NotAuthorized")
)

const Post = lazy(() =>
  import("./views/SMS/CRUD/Post/Post")
)
const Get = lazy(() =>
  import("./views/SMS/CRUD/Get/Get")
)
const Put = lazy(() =>
  import("./views/SMS/CRUD/PUT/Put")
)
const Delete = lazy(() =>
  import("./views/SMS/CRUD/Delete/Delete")
)
const ProviderForm = lazy(() =>
  import("./views/SMS/Provider/ProviderForm")
)
const AdminProviderForm = lazy(() =>
  import("./views/SMS/Provider/Admin/AdminProviderForm")
)
const loginForm = lazy(() =>
  import("./views/core/auth/pages/loginForm")
)
const StudentLogin = lazy(() =>
  import("./views/pages/authentication/login/StudentLogin")
)

const SessionExpired = lazy(() =>
  import("./views/pages/authentication/login/SessionExpired")
)

const AddEmployeeGeneralInfo = lazy(() => import("./views/SMS/Configuration/Employees/AddEmployeeGeneralInfo"))
const AddEmployeeContactInfo = lazy(() => import("./views/SMS/Configuration/Employees/AddEmployeeContactInfo"))
const EmployeeInformation = lazy(() => import("./views/SMS/Configuration/Employees/EmployeeInformatio"))
const MenuInfo = lazy(() => import("./views/SMS/Configuration/Menu/MenuInfo"))
const SiteSetting = lazy(() => import("./views/SMS/Configuration/SiteSetting/SiteSetting"))
const AddSiteSetting = lazy(() => import("./views/SMS/Configuration/SiteSetting/AddSiteSetting"))
const UpdateSiteSetting = lazy(() => import("./views/SMS/Configuration/SiteSetting/UpdateSiteSetting"))
const Country = lazy(() => import("./views/core/country/pages/index"))
const ProviderList = lazy(() => import("./views/SMS/Provider/ProviderList"))
const ProviderAdminList = lazy(() => import("./views/SMS/Provider/Admin/ProviderAdminList"))
const ProviderDetails = lazy(() => import("./views/SMS/Provider/ProviderDetails"))
const UpdateProvider = lazy(() => import("./views/SMS/Provider/UpdateProvider"))
const Branch = lazy(() => import("./views/SMS/Branches/Branch/Branch"))
const BranchManager = lazy(() => import("./views/SMS/Branches//Manager/BranchManager"))
const UpdateBranch = lazy(() => import("./views/SMS/Branches/Branch/UpdateBranch"))
const BranchList = lazy(() => import("./views/SMS/Branches/Branch/BranchList"))
const UpdateBranchManager = lazy(() => import("./views/SMS/Branches/Manager/UpdateBranchManager"))
const BranchProfile = lazy(() => import("./views/SMS/Branches/Branch/BranchProfile"))
const BranchEmployee = lazy(() => import("./views/SMS/Branches/Employee/BranchEmployee"))
const BranchManagerInformation = lazy(() => import("./views/SMS/Branches/BranchManager/BranchManagerInformation"))
const BranchTeamEmployeeInformation = lazy(() => import("./views/SMS/Branches/BranchManager/BranchTeamEmployeeInformation"))

// Admission Manager

const AdmissionManager = lazy(() => import("./views/SMS/Provider/AdmissionManager/AdmissionManager"))
const UpdateAdmissionManager = lazy(() => import("./views/SMS/Provider/AdmissionManager/UpdateAdmissionManager"))

// Student

const StudentList = lazy(() => import("./views/SMS/Students/StudentList"))
const StudentProfile = lazy(() => import("./views/SMS/Students/StudentProfile"))
const PersonalInformation = lazy(() => import("./views/SMS/Students/PersonalInformation"))
const ContactInformation = lazy(() => import("./views/SMS/Students/ContactInformation"))
const ApplicationInformation = lazy(() => import("./views/SMS/Students/ApplicationInformation"))
const EducationalInformation = lazy(() => import("./views/SMS/Students/EducationalInformation"))
const AddStudentRegister = lazy(() => import("./views/SMS/Students/StudentRegister"))
const AddExperience = lazy(() => import("./views/SMS/Students/Experience"))
const AddReference = lazy(() => import("./views/SMS/Students/Reference"))
const AddPersonalStatement = lazy(() => import("./views/SMS/Students/PersonalStatement"))
const AddOtherInformation = lazy(() => import("./views/SMS/Students/OtherInformation"))
const AddTestScore = lazy(() => import("./views/SMS/Students/TestScore"))
const StudentByConsultant = lazy(() => import("./views/SMS/Students/StudentByConsultant"))

// Education Level

const EducationLevelList = lazy(() => import("./views/SMS/EducationLevel/EducationLevelList"))
const AddEducationLevel = lazy(() => import("./views/SMS/EducationLevel/AddEducationLevel"))

// Degree

const DegreeList = lazy(() => import("./views/SMS/Degree/DegreeList"))
const AddDegree = lazy(() => import("./views/SMS/Degree/AddDegree"))









const UploadDocument = lazy(() => import("./views/SMS/Students/DocumentUpload"))

const ExamTestType = lazy(() => import("./views/SMS/Configuration/ExamTestType/ExamTestType"))
const ExamTestTypeAttribute = lazy(() => import("./views/SMS/Configuration/ExamTestType/ExamTestTypeAttribute"))


const UpdateUniversityInformation = lazy(() => import("./views/SMS/University/UpdateUniversityInformation"))

const StudentType = lazy(() => import("./views/SMS/Students/StudentType.js"))

// country

const CountryList = lazy(() => import("./views/SMS/Configuration/Country/Country.js"))

// Search

const Search = lazy(() => import("./views/SMS/Search/Search"))


// practice

const UpdateUser = lazy(() => import("./views/Test/UpdateUser"));



const demo = lazy(() => import("./views/SMS/Demo/Demo"))


const RouteConfig = ({ component: Component, fullLayout, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return (
        <ContextLayout.Consumer>
          {context => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                ? context.horizontalLayout
                : context.VerticalLayout
            return (
              <LayoutTag {...props} permission={props.user}>
                <Suspense fallback={<Spinner />}>
                    <Component {...props} />
                </Suspense>
              </LayoutTag>
            )
          }}
        </ContextLayout.Consumer>
      )
    }}
  />
)
const mapStateToProps = state => {
  return {
    user: state.auth.login.userRole
  }
}

const AppRoute = connect(mapStateToProps)(RouteConfig)

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <>
     
          {/* SMS Client Routing */}
         {
           isAuth ?
           <>
             <Router history={history}>
         <ToastProvider autoDismiss={true}>
        <Switch>
         <AppRoute exact path="/" component={analyticsDashboard} />
        
         {/* <AppRoute  path="/AdmissionManager" component={permissions?.includes(602)? AdmissionManager  : NotAuthorized } /> */}
         {/* <AppRoute  path="/AdmissionGetData" component={AdmissionGetData} /> */}
         {/* <AppRoute  path="/updateUser/:id" component={UpdateUser} /> */}
         <AppRoute exact path="/addAdmissionManager/:id" component={permissions?.includes(permissionList.Add_Admission_manager)? AdmissionManager : NotAuthorized} />
         <AppRoute  path="/updateAdmissionManager/:id/:id2" component={permissions?.includes(permissionList.Update_Admission_manager) ? UpdateAdmissionManager : NotAuthorized } />
{/*   
         <AppRoute  path="/demo" component={demo} /> */}
         {/* <AppRoute  path="/uni1" component={demo} /> */}
         {/* <AppRoute  path="/uni2" component={demo} /> */}
         {/* <AppRoute  path="/roles" component={permissions?.includes(3)? Roles : NotAuthorized} /> */}
         {/* <AppRoute  path="/addMenu" component={Menu} /> */}
         {/* <AppRoute  path="/menu" component={MenuInfo} /> */}
   
         <AppRoute  path="/rolePermission" component={permissions?.includes(permissionList?.Permission_List)? RolePermission : NotAuthorized} />
         <AppRoute  path="/roleMenu" component={permissions?.includes(permissionList?.View_Menulist) ? RoleMenu : NotAuthorized} />

         {/* employee type permission not added */}
         <AppRoute  path="/employeeType" component={permissions.includes(permissionList?.Employee_type)? EmployeeType : NotAuthorized} />
         {/* <AppRoute path="/employeeGeneralInfo/:id" component={EmployeeGeneralInfo} /> */}
         {/* <AppRoute path="/employeeContactInfo/:id" component={EmployeeContactInfo} /> */}
         <AppRoute  path="/employeeList" component={permissions?.includes(permissionList?.Staff_List) ? EmployeeList : NotAuthorized} />
         <AppRoute  path="/employeeProfile" component={permissions?.includes(permissionList?.View_Staff)? EmployeeProfile : NotAuthorized} />
         <AppRoute  path="/universityTypes" component={permissions?.includes(permissionList?.Add_Universitytype)? AddUniversityType : NotAuthorized} />
         <AppRoute  path="/universityCountry" component={permissions?.includes(permissionList?.Add_UniversityCountry)? AddUniversityCountry : NotAuthorized} />
         <AppRoute  path="/universityState" component={permissions?.includes(permissionList?.Universitystate_List) ? AddUniversityState : NotAuthorized} />
         <AppRoute  path="/addUniversity" component={permissions?.includes(permissionList?.Add_University  || permissionList?.Update_University)? AddUniversity : NotAuthorized} />
         <AppRoute  path="/addUniversityApplicationDocument" component={permissions?.includes(permissionList?.Add_universityApplicationdocument || permissionList?.Update_universityApplicationdocument)? AddUniversityApplicationDocument: NotAuthorized} />
         <AppRoute  path="/addUniversityTemplateDocument" component={permissions?.includes(permissionList?.Add_University_Template_Document || permissionList?.Update_University_Template_Document)? AddUniversityTemplateDocument : NotAuthorized} />
         {/* <AppRoute  path="/addUniversityRequiredDocument" component={UniversityRecquiredDocument} /> */}

          {/* intake */}
          <AppRoute  path="/intake" component={permissions?.includes(permissionList?.subject_intake_List)? Intake : NotAuthorized} />
          <AppRoute  path="/addNewIntakes" component={permissions?.includes(permissionList?.Add_subject_intake)? AddNewIntakes: NotAuthorized} />
          <AppRoute  path="/updateIntake/:id" component={permissions?.includes(permissionList?.Update_subject_intake)? UpdateIntake : NotAuthorized} />

          {/* Country */}
          <AppRoute  path="/country" component={permissions?.includes(permissionList?.Country_List)? AddCountry: NotAuthorized} />

          {/* State */}
          <AppRoute  path="/state" component={permissions?.includes(permissionList?.State_List)? AddState: NotAuthorized} />


          {/* consultant */}
          <AppRoute  path="/consultantList" component={permissions?.includes(101) ? ConsultantList : NotAuthorized} />
          <AppRoute  path="/consultantProfile/:id" component={permissions?.includes(104)? ConsultantProfile : NotAuthorized} />
          <AppRoute  path="/addConsultant" component={permissions?.includes(102) ? AddConsultant : NotAuthorized} />
          <AppRoute  path="/addConsultantType" component={AddConsultantType} />
          
          <AppRoute  path="/addBankDetails" component={permissions?.includes(102)? BankDetails : NotAuthorized } />
          <AppRoute  path="/addConsultantInformation" component={permissions?.includes(102)? AddConsultantInformation : NotAuthorized } />
          <AppRoute  path="/associates/:id" component={permissions?.includes(107)? AssociateList : NotAuthorized} />
          
          

         <AppRoute  path="/addUniversityCampus" component={permissions?.includes(1062)? AddUniversityCampus: NotAuthorized} />
         <AppRoute  path="/addUniversityFinancial" component={permissions?.includes(1082)? AddUniversityFinancial : NotAuthorized }/>
         <AppRoute  path="/addUniversityFeatures" component={permissions?.includes(1042)? AddUniversityFeatures : NotAuthorized} />
         <AppRoute  path="/addUniversityGallery" component={permissions?.includes(1052)? AddUniversityGallery: NotAuthorized} />
         <AppRoute  path="/universityList" component={permissions?.includes(1001)? UniversityList : NotAuthorized} />
         <AppRoute  path="/universityDetails/:id" component={permissions?.includes(1004)? UniversityDetails : NotAuthorized} />
         <AppRoute  path="/campusList" component={permissions?.includes(1061)? CampusList : NotAuthorized } />
         <AppRoute  path="/campusSubjectList/:camId" component={permissions?.includes(1201)? CampusSubjectList : NotAuthorized} />
         <AppRoute  path="/campusDetails/:id" component={permissions?.includes(1064)? CampusDetails : NotAuthorized } />

         <AppRoute  path="/documentlist" component={permissions?.includes(1506)? DocumentList : NotAuthorized} />
         <AppRoute  path="/documentCategoryList" component={permissions?.includes(1501)? DocumentCategoryList : NotAuthorized} />
         <AppRoute  path="/subjectDocumentGroup" component={permissions?.includes(1302)? DocumentGroup : NotAuthorized} />


         <AppRoute  path="/department" component={permissions?.includes(1282)? AddDepartment : NotAuthorized} />
         <AppRoute  path="/subDepartment" component={permissions?.includes(1261)? AddSubDepartment : NotAuthorized} />
         <AppRoute  path="/programLevel" component={permissions?.includes(1271)? AddProgramLevel : NotAuthorized} />
         <AppRoute  path="/addSubject" component={permissions?.includes(1252)? Subject : NotAuthorized} />

         <AppRoute  path="/addDepartment" component={permissions?.includes(1282)? AddDepartment : NotAuthorized} />
         <AppRoute  path="/addSubDepartment" component={permissions?.includes(1261)? AddSubDepartment : NotAuthorized} />
         <AppRoute  path="/addProgramLevel" component={permissions?.includes(1271)? AddProgramLevel : NotAuthorized} />
         <AppRoute  path="/addSubject/:id?" component={permissions?.includes(1252)? Subject : NotAuthorized} />

         <AppRoute  path="/subjectList" component={permissions?.includes(1251)? SubjectList: NotAuthorized} />
         <AppRoute  path="/editSubject/:id" component={permissions?.includes(1253)? EditSubject : NotAuthorized} />
         <AppRoute  path="/addSubjectFee/:id" component={permissions?.includes(1242)? AddSubjectFee : NotAuthorized} />
         <AppRoute  path="/addSubjectDeliveryPattern/:id" component={permissions?.includes(1322)? AddSubjectDeliveryPattern : NotAuthorized} />
         <AppRoute  path="/addSubjectDocumentRequirement/:id" component={permissions?.includes(1222)? AddSubjectDocumentRequirement : NotAuthorized} />
         <AppRoute  path="/editSubjectDocumentRequirement/:id" component={permissions?.includes(1223)? EditSubjectDocumentRequirement : NotAuthorized} />
         <AppRoute  path="/addSubjectRequirements/:id" component={permissions?.includes(1212)? AddSubjectRequirements : NotAuthorized} />
         <AppRoute  path="/EditSubjectRequirements/:id" component={permissions?.includes(1213)? EditSubjectRequirements : NotAuthorized} />
         <AppRoute  path="/EditSubjectFee/:subId" component={permissions?.includes(1243)? EditSubjectFee : NotAuthorized} />
         <AppRoute  path="/editDeliveryPattern/:id" component={permissions?.includes(1323)? EditDeliveryPattern : NotAuthorized} />
         <AppRoute  path="/subjectFeeInfo" component={permissions?.includes(1241)? SubjectFeeInformation : NotAuthorized} />
         <AppRoute  path="/subjectIntake/:camId/:subbId" component={permissions?.includes(1231)? SubjectIntake : NotAuthorized} />
         <AppRoute  path="/subjectProfile/:subjId" component={permissions?.includes(1254)? SubjectProfile : NotAuthorized} />

         {/* <AppRoute  path="/fileUpload" component={FileUpload} /> */}
         
         {/* <AppRoute path="/subjectIntake" component={SubjectIntake} /> */}

         {/* Applications */}
         <AppRoute  path="/applications" component={permissions?.includes(1551)? Applications : NotAuthorized} />
         <AppRoute  path="/applicationDetails/:id/:stdId" component={permissions?.includes(1554)? ApplicationDetails : NotAuthorized} />

        
         {/* <AppRoute  path="/newform" component={Post} /> */}
         {/* <AppRoute  path="/showdata" component={Get} /> */}
         {/* <AppRoute  path="/update/:id" component={Put} /> */}
         {/* <AppRoute  path="/delete/:id" component={Delete} /> */}
         <AppRoute  path="/providerForm" component={permissions?.includes(502)? ProviderForm : NotAuthorized} />
         <AppRoute  path="/adminProviderForm" component={permissions?.includes(552)? AdminProviderForm : NotAuthorized} />
         <AppRoute  path="/addEmployeeGeneralInfo" component={permissions?.includes(14)? AddEmployeeGeneralInfo : NotAuthorized} />
         <AppRoute  path="/addEmployeeContactInfo" component={permissions?.includes(14)? AddEmployeeContactInfo : NotAuthorized} />
         <AppRoute  path="/employeeGeneralInfo/:id" component={permissions?.includes(permissionList?.Update_Staff)? EmployeeGeneralInfo : NotAuthorized} />
         <AppRoute  path="/employeeContactInfo/:id" component={permissions?.includes(permissionList?.Update_Staff)? EmployeeContactInfo : NotAuthorized} />
         {/* <AppRoute  path="/employeeInformatio" component={EmployeeInformation} /> */}
         {/* <AppRoute  path="/siteSetting" component={SiteSetting} />
         <AppRoute  path="/addSiteSetting" component={AddSiteSetting} />
         <AppRoute  path="/updateSiteSetting" component={UpdateSiteSetting} /> */}
         {/* <AppRoute  path="/country" component={Country} /> */}
         <AppRoute  path="/editDepartment/:id" component={permissions?.includes(permissionList?.Update_department)? EditDepartment : NotAuthorized} />
         <AppRoute  path="/editSubDepartment/:id" component={permissions?.includes(permissionList?.Update_sub_department)? EditSubDepartment : NotAuthorized} />

         <AppRoute  path="/providerList" component={permissions?.includes(permissionList?.Provider_List)? ProviderList : NotAuthorized} />
         <AppRoute  path="/providerAdminList" component={permissions?.includes(permissionList?.Provider_Admin_List)? ProviderAdminList : NotAuthorized} />


         <AppRoute  path="/providerDetails/:id" component={permissions?.includes(permissionList?.View_Provider)? ProviderDetails : NotAuthorized} />
         <AppRoute  path="/updateProvider/:id" component={permissions?.includes(permissionList?.Update_Provider)? UpdateProvider : NotAuthorized} />
         <AppRoute  path="/branchInformation" component={permissions?.includes(permissionList?.Add_Branch)? Branch : NotAuthorized} />
         <AppRoute  path="/addBranchManager" component={permissions?.includes(422)? BranchManager : NotAuthorized} />
         <AppRoute  path="/branchEmployeeInformation/:id?" component={permissions?.includes(412)? BranchEmployee : NotAuthorized} />
         {/* <AppRoute path="/updateBranch/:id" component={UpdateBranch} /> */}
         <AppRoute  path="/branchList" component={permissions?.includes(401)? BranchList : NotAuthorized} />
         {/* <AppRoute path="/updateBranchManager/:id" component={UpdateBranchManager} /> */}
         <AppRoute  path="/branchProfile/:id" component={permissions?.includes(404)? BranchProfile : NotAuthorized} />
         <AppRoute  path="/updateBranchManagerInformation/:id" component={permissions?.includes(423)? BranchManagerInformation : NotAuthorized} />
         <AppRoute  path="/teamEmployee/:teamId" component={permissions?.includes(441)? BranchTeamEmployeeInformation : NotAuthorized} />

         <AppRoute  path="/studentList/:cId?/:cLabel?" component={permissions?.includes(201)? StudentList : NotAuthorized} />
         <AppRoute  path="/studentProfile/:sId" component={permissions?.includes(204)? StudentProfile : NotAuthorized} />
         <AppRoute  path="/addStudentInformation" component={permissions?.includes(202)? PersonalInformation : NotAuthorized} />
         <AppRoute  path="/addStudentContactInformation" component={permissions?.includes(202)? ContactInformation : NotAuthorized} />
         <AppRoute  path="/addStudentApplicationInformation" component={permissions?.includes(202)? ApplicationInformation : NotAuthorized} />
         <AppRoute  path="/addStudentEducationalInformation" component={permissions?.includes(202)? EducationalInformation : NotAuthorized} />
        
         <AppRoute  path="/addStudentRegister" component={permissions?.includes(202)? AddStudentRegister : NotAuthorized} />

         <AppRoute  path="/addExperience" component={permissions?.includes(202)? AddExperience : NotAuthorized} />
         <AppRoute  path="/addReference" component={permissions?.includes(202)? AddReference : NotAuthorized} />
         <AppRoute  path="/addPersonalStatement" component={permissions?.includes(202)? AddPersonalStatement : NotAuthorized} />
         <AppRoute  path="/addOtherInformation" component={permissions?.includes(202)? AddOtherInformation : NotAuthorized} />
         <AppRoute  path="/addTestScore" component={permissions?.includes(202)?AddTestScore : NotAuthorized} />

         {/* permission Not added */}
         <AppRoute  path="/studentByConsultant/:id" component={permissions?.includes(114)? StudentByConsultant : NotAuthorized} />
       
         <AppRoute  path="/uploadDocument" component={permissions?.includes(202)? UploadDocument : NotAuthorized} />

         {/* Education Level paths */}

         <AppRoute  path="/educationalLevelList" component={permissions?.includes(1296)? EducationLevelList : NotAuthorized} />
         <AppRoute  path="/addEducationLevel/:name?/:description?/:levelValue?/:id?" component={permissions?.includes(1297)? AddEducationLevel : NotAuthorized} />

         {/* Degree Paths */}

         <AppRoute  path="/degreeList" component={permissions?.includes(1291)? DegreeList : NotAuthorized} />
         <AppRoute  path="/addDegree/:degreeName?/:eduLabel?/:educationId?/:id?" component={permissions?.includes(1292)? AddDegree : NotAuthorized} />


         <AppRoute  path="/examTestType" component={permissions?.includes(1401)? ExamTestType : NotAuthorized} />

         {/* <AppRoute  path="/examTestTypeAttribute" component={ExamTestTypeAttribute} /> */}




         <AppRoute  path="/updateUniversityInformation/:id" component={permissions?.includes(1003)? UpdateUniversityInformation : NotAuthorized} />

         <AppRoute  path="/studentTypeList" component={permissions?.includes(211)? StudentType : NotAuthorized} />


         <AppRoute  path="/countryList" component={permissions?.includes(1531)? CountryList : NotAuthorized} />

        
         <AppRoute  path="/search" component={Search} />

         <AppRoute  path="/500" component={InternalServerError} />

         <AppRoute  path="/notAuthorized" component={NotAuthorized} />

  
          {/* Session Expired  */}
         {/* <AppRoute path='/sessionExpired' component={SessionExpired} fullLayout /> */}


         <AppRoute component={notFound} fullLayout />



         </Switch>
      </ToastProvider>
      </Router>





         
         
         

        
         
       
        
         
         




           </> :
           <>
             <Router history={history}>
         <ToastProvider autoDismiss={true}>
        <Switch>

          
      
         <AppRoute exact path="/" component={StudentLogin} fullLayout />

         <AppRoute path="/pages/studentRegister" component={StudentRegister} fullLayout />
         <AppRoute path="/pages/consultantRegister" component={ConsultantRegister} fullLayout />
         <AppRoute path="/pages/providerRegister" component={ProviderRegister} fullLayout />
       

         <AppRoute
            path="/pages/forgot-password"
            component={forgotPassword}
            fullLayout
          />
         <AppRoute
            path="/pages/lock-screen"
            component={lockScreen}
            fullLayout
          />
          <AppRoute
            path="/pages/reset-password"
            component={resetPassword}
            fullLayout
          />

            <AppRoute
            path="*"
            exact
            component={() => <Redirect to="/" />}
          />

      </Switch>
      </ToastProvider>
      </Router>
           </>
         }
         
         
       
      </>
    )
  }
}

export default AppRouter
