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
const SubjectFeeInformation = lazy(() => import("./views/SMS/UniversitySubjects/SubjectFeeInformation.jsx"))
const EditSubject = lazy(() => import("./views/SMS/UniversitySubjects/EditSubject.jsx"))
const EditSubjectFee = lazy(() => import("./views/SMS/UniversitySubjects/EditSubjectFee.jsx"))
const SubjectIntake =  lazy(() => import("./views/SMS/UniversitySubjects/SubjectIntake.jsx"))
const SubjectProfile =  lazy(() => import("./views/SMS/UniversitySubjects/SubjectProfile.js"))

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
        
         <AppRoute  path="/AdmissionManager" component={AdmissionManager} />
         <AppRoute  path="/AdmissionGetData" component={AdmissionGetData} />
         <AppRoute  path="/updateUser/:id" component={UpdateUser} />
         <AppRoute exact path="/addAdmissionManager/:id" component={AdmissionManager} />
         <AppRoute  path="/updateAdmissionManager/:id/:id2" component={UpdateAdmissionManager} />
  
         <AppRoute  path="/demo" component={demo} />
         <AppRoute  path="/uni1" component={demo} />
         <AppRoute  path="/uni2" component={demo} />
         <AppRoute  path="/roles" component={Roles} />
         <AppRoute  path="/addMenu" component={Menu} />
         <AppRoute  path="/menu" component={MenuInfo} />
   
         <AppRoute  path="/rolePermission" component={RolePermission} />
         <AppRoute  path="/roleMenu" component={RoleMenu} />
         <AppRoute  path="/employeeType" component={EmployeeType} />
         {/* <AppRoute path="/employeeGeneralInfo/:id" component={EmployeeGeneralInfo} /> */}
         {/* <AppRoute path="/employeeContactInfo/:id" component={EmployeeContactInfo} /> */}
         <AppRoute  path="/employeeList" component={EmployeeList} />
         <AppRoute  path="/employeeProfile" component={EmployeeProfile} />
         <AppRoute  path="/addUniversityType" component={AddUniversityType} />
         <AppRoute  path="/addUniversityCountry" component={AddUniversityCountry} />
         <AppRoute  path="/addUniversityState" component={AddUniversityState} />
         <AppRoute  path="/addUniversity" component={AddUniversity} />
         <AppRoute  path="/addUniversityApplicationDocument" component={AddUniversityApplicationDocument} />
         <AppRoute  path="/addUniversityTemplateDocument" component={AddUniversityTemplateDocument} />
         <AppRoute  path="/addUniversityRequiredDocument" component={UniversityRecquiredDocument} />

          {/* intake */}
          <AppRoute  path="/intake" component={Intake} />
          <AppRoute  path="/addNewIntakes" component={AddNewIntakes} />
          <AppRoute  path="/updateIntake/:id" component={UpdateIntake} />


          {/* consultant */}
          <AppRoute  path="/consultantList" component={ConsultantList} />
          <AppRoute  path="/consultantProfile/:id" component={ConsultantProfile} />
          <AppRoute  path="/addConsultant" component={AddConsultant} />
          <AppRoute  path="/addConsultantType" component={AddConsultantType} />
          
          <AppRoute  path="/addBankDetails" component={BankDetails} />
          <AppRoute  path="/addConsultantInformation" component={AddConsultantInformation} />
          
          

         <AppRoute  path="/addUniversityCampus" component={AddUniversityCampus} />
         <AppRoute  path="/addUniversityFinancial" component={AddUniversityFinancial}/>
         <AppRoute  path="/addUniversityFeatures" component={AddUniversityFeatures} />
         <AppRoute  path="/addUniversityGallery" component={AddUniversityGallery} />
         <AppRoute  path="/universityList" component={UniversityList} />
         <AppRoute  path="/universityDetails/:id" component={UniversityDetails} />
         <AppRoute  path="/campusList" component={CampusList} />
         <AppRoute  path="/campusSubjectList/:camId" component={CampusSubjectList} />
         <AppRoute  path="/campusDetails/:id" component={CampusDetails} />

         <AppRoute  path="/documentlist" component={DocumentList} />
         <AppRoute  path="/documentCategoryList" component={DocumentCategoryList} />
         <AppRoute  path="/addSubjectDocumentGroup" component={DocumentGroup} />

         <AppRoute  path="/addDepartment" component={AddDepartment} />
         <AppRoute  path="/addSubDepartment" component={AddSubDepartment} />
         <AppRoute  path="/addProgramLevel" component={AddProgramLevel} />
         <AppRoute  path="/addSubject" component={Subject} />
         <AppRoute  path="/subjectList" component={SubjectList} />
         <AppRoute  path="/editSubject/:id" component={EditSubject} />
         <AppRoute  path="/addSubjectFee" component={AddSubjectFee} />
         <AppRoute  path="/EditSubjectFee/:subId" component={EditSubjectFee} />
         <AppRoute  path="/subjectFeeInfo" component={SubjectFeeInformation} />
         <AppRoute  path="/subjectIntake/:camId/:subbId" component={SubjectIntake} />
         <AppRoute  path="/subjectProfile/:subjId" component={SubjectProfile} />

         <AppRoute  path="/fileUpload" component={FileUpload} />
         
         {/* <AppRoute path="/subjectIntake" component={SubjectIntake} /> */}

         {/* Applications */}
         <AppRoute  path="/applications" component={Applications} />
         <AppRoute  path="/applicationDetails/:id/:stdId" component={ApplicationDetails} />

        
         <AppRoute  path="/newform" component={Post} />
         <AppRoute  path="/showdata" component={Get} />
         <AppRoute  path="/update/:id" component={Put} />
         <AppRoute  path="/delete/:id" component={Delete} />
         <AppRoute  path="/providerForm" component={ProviderForm} />
         <AppRoute  path="/adminProviderForm" component={AdminProviderForm} />
         <AppRoute  path="/addEmployeeGeneralInfo" component={AddEmployeeGeneralInfo} />
         <AppRoute  path="/addEmployeeContactInfo" component={AddEmployeeContactInfo} />
         <AppRoute  path="/employeeGeneralInfo/:id" component={EmployeeGeneralInfo} />
         <AppRoute  path="/employeeContactInfo/:id" component={EmployeeContactInfo} />
         <AppRoute  path="/employeeInformatio" component={EmployeeInformation} />
         <AppRoute  path="/siteSetting" component={SiteSetting} />
         <AppRoute  path="/addSiteSetting" component={AddSiteSetting} />
         <AppRoute  path="/updateSiteSetting" component={UpdateSiteSetting} />
         <AppRoute  path="/country" component={Country} />
         <AppRoute  path="/editDepartment/:id" component={EditDepartment} />
         <AppRoute  path="/editSubDepartment/:id" component={EditSubDepartment} />

         <AppRoute  path="/providerList" component={ProviderList} />
         <AppRoute  path="/providerAdminList" component={ProviderAdminList} />


         <AppRoute  path="/providerDetails/:id" component={ProviderDetails} />
         <AppRoute  path="/updateProvider/:id" component={UpdateProvider} />
         <AppRoute  path="/branchInformation" component={Branch} />
         <AppRoute  path="/addBranchManager" component={BranchManager} />
         <AppRoute  path="/branchEmployeeInformation/:id?" component={BranchEmployee} />
         {/* <AppRoute path="/updateBranch/:id" component={UpdateBranch} /> */}
         <AppRoute  path="/branchList" component={BranchList} />
         {/* <AppRoute path="/updateBranchManager/:id" component={UpdateBranchManager} /> */}
         <AppRoute  path="/branchProfile/:id" component={BranchProfile} />
         <AppRoute  path="/updateBranchManagerInformation/:id" component={BranchManagerInformation} />
         <AppRoute  path="/teamEmployee/:teamId" component={BranchTeamEmployeeInformation} />

         <AppRoute  path="/studentList/:cId?/:cLabel?" component={StudentList} />
         <AppRoute  path="/studentProfile/:sId" component={StudentProfile} />
         <AppRoute  path="/addStudentInformation" component={PersonalInformation} />
         <AppRoute  path="/addStudentContactInformation" component={ContactInformation} />
         <AppRoute  path="/addStudentApplicationInformation" component={ApplicationInformation} />
         <AppRoute  path="/addStudentEducationalInformation" component={EducationalInformation} />
        
         <AppRoute  path="/addStudentRegister" component={AddStudentRegister} />

         <AppRoute  path="/addExperience" component={AddExperience} />
         <AppRoute  path="/addReference" component={AddReference} />
         <AppRoute  path="/addPersonalStatement" component={AddPersonalStatement} />
         <AppRoute  path="/addOtherInformation" component={AddOtherInformation} />
         <AppRoute  path="/addTestScore" component={AddTestScore} />
         <AppRoute  path="/studentByConsultant" component={StudentByConsultant} />
       
         <AppRoute  path="/uploadDocument" component={UploadDocument} />

         {/* Education Level paths */}

         <AppRoute  path="/educationalLevelList" component={EducationLevelList} />
         <AppRoute  path="/addEducationLevel/:name?/:description?/:levelValue?/:id?" component={AddEducationLevel} />

         {/* Degree Paths */}

         <AppRoute  path="/degreeList" component={DegreeList} />
         <AppRoute  path="/addDegree/:degreeName?/:eduLabel?/:educationId?/:id?" component={AddDegree} />


         <AppRoute  path="/examTestType" component={ExamTestType} />
         <AppRoute  path="/examTestTypeAttribute" component={ExamTestTypeAttribute} />




         <AppRoute  path="/updateUniversityInformation/:id" component={UpdateUniversityInformation} />

         <AppRoute  path="/studentTypeList" component={StudentType} />


         <AppRoute  path="/countryList" component={CountryList} />

         <AppRoute  path="/search" component={Search} />

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
