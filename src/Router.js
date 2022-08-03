import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
import { history } from "./history"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import Spinner from "./components/core/spinner/Loading-spinner"
import { ContextLayout } from "./utility/context/Layout"


import { ToastProvider } from "react-toast-notifications";
import AdmissionGetData from "./views/Test/AdmissionGetData"




// Authentication Checking
const token = localStorage.getItem('token');
const isAuth = token != null ? true : false;
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
const Permissions = lazy(() => import("./views/SMS/Configuration/Permissions/Permissions.jsx"))
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

// Document
const DocumentList = lazy(() => import("./views/SMS/Document/DocumentList.js"))

// University Subject
const AddDepartment = lazy(() => import("./views/SMS/UniversitySubjects/Department.jsx"))
const AddSubDepartment = lazy(() => import("./views/SMS/UniversitySubjects/SubDepartment.jsx"))
const AddProgramLevel = lazy(() => import("./views/SMS/UniversitySubjects/ProgramLevel.jsx"))
const Subject = lazy(() => import("./views/SMS/UniversitySubjects/Subject.jsx"))
const SubjectList = lazy(() => import("./views/SMS/UniversitySubjects/SubjectList.jsx"))
const AddSubjectFee = lazy(() => import("./views/SMS/UniversitySubjects/AddSubjectFee.jsx"))
const SubjectFeeInformation = lazy(() => import("./views/SMS/UniversitySubjects/SubjectFeeInformation.jsx"))
const EditSubject = lazy(() => import("./views/SMS/UniversitySubjects/EditSubject.jsx"))
const EditSubjectFee = lazy(() => import("./views/SMS/UniversitySubjects/EditSubjectFee.jsx"))
const SubjectIntake =  lazy(() => import("./views/SMS/UniversitySubjects/SubjectIntake.jsx"))
const SubjectProfile =  lazy(() => import("./views/SMS/UniversitySubjects/SubjectProfile.js"))

// file upload
const FileUpload =  lazy(() => import("./views/SMS/UniversitySubjects/FileUpload.js"))


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
const AdmissionManager = lazy(() => import("./views/SMS/Provider/AdmissionManager/AdmissionManager"))

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
      <Router history={history}>
         <ToastProvider autoDismiss={true}>
        <Switch>
          {/* SMS Client Routing */}
         {
           isAuth ?
           <>
         <AppRoute exact path="/" component={localStorage.getItem('access')?analyticsDashboard : notFound} />
        
         <AppRoute path="/AdmissionManager" component={localStorage.getItem('access')? AdmissionManager : notFound} />
         <AppRoute path="/AdmissionGetData" component={localStorage.getItem('access')? AdmissionGetData : notFound} />
         <AppRoute path="/updateUser/:id" component={localStorage.getItem('access')? UpdateUser : notFound} />
         <AppRoute path="/addAdmissionManager/:id" component={localStorage.getItem('access')? AdmissionManager : notFound} />
  
         <AppRoute path="/demo" component={localStorage.getItem('access')? demo : notFound} />
         <AppRoute path="/uni1" component={localStorage.getItem('access')? demo : notFound} />
         <AppRoute path="/uni2" component={localStorage.getItem('access')? demo : notFound} />
         <AppRoute path="/roles" component={localStorage.getItem('access')? Roles : notFound} />
         <AppRoute path="/addMenu" component={Menu} />
         <AppRoute path="/menu" component={MenuInfo} />
         <AppRoute path="/permissions" component={localStorage.getItem('access')? Permissions : notFound} />
         <AppRoute path="/rolePermission" component={localStorage.getItem('access')? RolePermission : notFound} />
         <AppRoute path="/roleMenu" component={localStorage.getItem('access')? RoleMenu : notFound} />
         <AppRoute path="/employeeType" component={localStorage.getItem('access')? EmployeeType : notFound} />
         {/* <AppRoute path="/employeeGeneralInfo/:id" component={EmployeeGeneralInfo} /> */}
         {/* <AppRoute path="/employeeContactInfo/:id" component={EmployeeContactInfo} /> */}
         <AppRoute path="/employeeList" component={localStorage.getItem('access')? EmployeeList : notFound} />
         <AppRoute path="/employeeProfile" component={localStorage.getItem('access')? EmployeeProfile : notFound} />
         <AppRoute path="/addUniversityType" component={localStorage.getItem('access')? AddUniversityType : notFound} />
         <AppRoute path="/addUniversityCountry" component={localStorage.getItem('access')? AddUniversityCountry : notFound} />
         <AppRoute path="/addUniversityState" component={localStorage.getItem('access')? AddUniversityState : notFound} />
         <AppRoute path="/addUniversity" component={localStorage.getItem('access')? AddUniversity : notFound} />
         <AppRoute path="/addUniversityApplicationDocument" component={localStorage.getItem('access')? AddUniversityApplicationDocument : notFound} />
         <AppRoute path="/addUniversityRequiredDocument" component={localStorage.getItem('access')? UniversityRecquiredDocument : notFound} />

          {/* intake */}
          <AppRoute path="/intake" component={localStorage.getItem('access')? Intake : notFound} />
          <AppRoute path="/addNewIntakes" component={localStorage.getItem('access')? AddNewIntakes : notFound} />
          <AppRoute path="/updateIntake/:id" component={localStorage.getItem('access')? UpdateIntake : notFound} />


          {/* consultant */}
          <AppRoute path="/consultantList" component={localStorage.getItem('access')?ConsultantList : notFound} />
          <AppRoute path="/consultantProfile/:id" component={localStorage.getItem('access')? ConsultantProfile : notFound} />
          <AppRoute path="/addConsultant" component={localStorage.getItem('access')? AddConsultant : notFound} />
          <AppRoute path="/addConsultantType" component={localStorage.getItem('access')? AddConsultantType : notFound} />
          
          <AppRoute path="/addBankDetails" component={localStorage.getItem('access')? BankDetails : notFound} />
          <AppRoute path="/addConsultantInformation" component={localStorage.getItem('access')? AddConsultantInformation : notFound} />
          
          

         <AppRoute path="/addUniversityCampus" component={localStorage.getItem('access')? AddUniversityCampus : notFound} />
         <AppRoute path="/addUniversityFinancial" component={localStorage.getItem('access')? AddUniversityFinancial : notFound} />
         <AppRoute path="/addUniversityFeatures" component={localStorage.getItem('access')? AddUniversityFeatures : notFound} />
         <AppRoute path="/addUniversityGallery" component={localStorage.getItem('access')? AddUniversityGallery : notFound} />
         <AppRoute path="/universityList" component={localStorage.getItem('access')? UniversityList : notFound} />
         <AppRoute path="/universityDetails/:id" component={localStorage.getItem('access')? UniversityDetails : notFound} />
         <AppRoute path="/campusList" component={localStorage.getItem('access')? CampusList : notFound} />
         <AppRoute path="/campusSubjectList/:camId" component={localStorage.getItem('access')? CampusSubjectList : notFound} />
         <AppRoute path="/campusDetails/:id" component={localStorage.getItem('access')? CampusDetails : notFound} />

         <AppRoute path="/documentlist" component={localStorage.getItem('access')? DocumentList : notFound} />

         <AppRoute path="/addDepartment" component={localStorage.getItem('access')? AddDepartment : notFound} />
         <AppRoute path="/addSubDepartment" component={localStorage.getItem('access')? AddSubDepartment : notFound} />
         <AppRoute path="/addProgramLevel" component={localStorage.getItem('access')? AddProgramLevel : notFound} />
         <AppRoute path="/addSubject" component={localStorage.getItem('access')? Subject : notFound} />
         <AppRoute path="/subjectList" component={localStorage.getItem('access')? SubjectList : notFound} />
         <AppRoute path="/editSubject/:id" component={localStorage.getItem('access')? EditSubject : notFound} />
         <AppRoute path="/addSubjectFee" component={localStorage.getItem('access')? AddSubjectFee : notFound} />
         <AppRoute path="/EditSubjectFee/:subId" component={localStorage.getItem('access')? EditSubjectFee : notFound} />
         <AppRoute path="/subjectFeeInfo" component={localStorage.getItem('access')? SubjectFeeInformation : notFound} />
         <AppRoute path="/subjectIntake/:camId/:subbId" component={localStorage.getItem('access')? SubjectIntake : notFound} />
         <AppRoute path="/subjectProfile/:subjId" component={localStorage.getItem('access')? SubjectProfile : notFound} />

         <AppRoute path="/fileUpload" component={localStorage.getItem('access')? FileUpload : notFound} />
         
         {/* <AppRoute path="/subjectIntake" component={SubjectIntake} /> */}

         <AppRoute path="/404" component={localStorage.getItem('access')? notFound : notFound} />
         <AppRoute path="/newform" component={localStorage.getItem('access')? Post : notFound} />
         <AppRoute path="/showdata" component={localStorage.getItem('access')? Get : notFound} />
         <AppRoute path="/update/:id" component={localStorage.getItem('access')? Put : notFound} />
         <AppRoute path="/delete/:id" component={localStorage.getItem('access')? Delete : notFound} />
         <AppRoute path="/providerForm" component={ProviderForm} />
         <AppRoute path="/adminProviderForm" component={AdminProviderForm} />
         <AppRoute path="/addEmployeeGeneralInfo" component={AddEmployeeGeneralInfo} />
         <AppRoute path="/addEmployeeContactInfo" component={AddEmployeeContactInfo} />
         <AppRoute path="/employeeGeneralInfo/:id" component={EmployeeGeneralInfo} />
         <AppRoute path="/employeeContactInfo/:id" component={EmployeeContactInfo} />
         <AppRoute path="/employeeInformatio" component={EmployeeInformation} />
         <AppRoute path="/siteSetting" component={SiteSetting} />
         <AppRoute path="/addSiteSetting" component={AddSiteSetting} />
         <AppRoute path="/updateSiteSetting" component={UpdateSiteSetting} />
         <AppRoute path="/country" component={Country} />
         <AppRoute path="/editDepartment/:id" component={EditDepartment} />
         <AppRoute path="/editSubDepartment/:id" component={EditSubDepartment} />

         <AppRoute path="/providerList" component={ProviderList} />
         <AppRoute path="/providerAdminList" component={ProviderAdminList} />


         <AppRoute path="/providerDetails/:id" component={ProviderDetails} />
         <AppRoute path="/updateProvider/:id" component={UpdateProvider} />
         <AppRoute path="/branchInformation" component={Branch} />
         <AppRoute path="/addBranchManager" component={BranchManager} />
         <AppRoute path="/branchEmployeeInformation" component={BranchEmployee} />
         {/* <AppRoute path="/updateBranch/:id" component={UpdateBranch} /> */}
         <AppRoute path="/branchList" component={BranchList} />
         {/* <AppRoute path="/updateBranchManager/:id" component={UpdateBranchManager} /> */}
         <AppRoute path="/branchProfile/:id" component={BranchProfile} />
         <AppRoute path="/updateBranchManagerInformation/:id" component={BranchManagerInformation} />
         <AppRoute path="/teamEmployee/:teamId" component={BranchTeamEmployeeInformation} />

         <AppRoute path="/studentList/:cId?/:cLabel?" component={StudentList} />
         <AppRoute path="/studentProfile/:sId" component={StudentProfile} />
         <AppRoute path="/addStudentInformation" component={PersonalInformation} />
         <AppRoute path="/addStudentContactInformation" component={ContactInformation} />
         <AppRoute path="/addStudentApplicationInformation" component={ApplicationInformation} />
         <AppRoute path="/addStudentEducationalInformation" component={EducationalInformation} />
        
         <AppRoute path="/addStudentRegister" component={AddStudentRegister} />

         <AppRoute path="/addExperience" component={AddExperience} />
         <AppRoute path="/addReference" component={AddReference} />
         <AppRoute path="/addPersonalStatement" component={AddPersonalStatement} />
         <AppRoute path="/addOtherInformation" component={AddOtherInformation} />
         <AppRoute path="/addTestScore" component={AddTestScore} />
         <AppRoute path="/studentByConsultant" component={StudentByConsultant} />
       
         <AppRoute path="/uploadDocument" component={UploadDocument} />

         {/* Education Level paths */}

         <AppRoute path="/educationalLevelList" component={EducationLevelList} />
         <AppRoute path="/addEducationLevel/:name?/:description?/:levelValue?/:id?" component={AddEducationLevel} />

         {/* Degree Paths */}

         <AppRoute path="/degreeList" component={DegreeList} />
         <AppRoute path="/addDegree/:degreeName?/:eduLabel?/:educationId?/:id?" component={AddDegree} />


         <AppRoute path="/examTestType" component={ExamTestType} />
         <AppRoute path="/examTestTypeAttribute" component={ExamTestTypeAttribute} />




         <AppRoute path="/updateUniversityInformation/:id" component={UpdateUniversityInformation} />

         <AppRoute path="/studentTypeList" component={StudentType} />


         <AppRoute path="/countryList" component={CountryList} />

         <AppRoute path="/search" component={Search} />





         
         
         

        
         
       
        
         
         




           </> :
           <>

           <Redirect
                to={{
                    pathname: "/",
                    // state: { from: location }
                }}
            />
        
      
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
           </>
         }
         
         
        </Switch>
      </ToastProvider>
      </Router>
    )
  }
}

export default AppRouter
