import NotFound from './views/common/404.vue'
import Login from './views/common/Login.vue'
import Home from './views/common/Home.vue'
import Monkey from './views/Monkey.vue'
import About from './views/About.vue'
import projectList from './views/Projectlist.vue'
import ProjectInfo from './views/project/project.vue'
import globalHost from './views/project/global/Globalhost.vue'
import API from './views/project/api/API.vue'
import ApiList from './views/project/api/ApiList.vue'
import ApiListGroup from './views/project/api/ApiListGroup.vue'
import FestTest from './views/project/api/FestTest.vue'
import addApi from './views/project/api/Addapi.vue'
import detail from './views/project/api/updateApi/ApiForm.vue'
import ApiInfo from './views/project/api/updateApi/ApiInfo.vue'
import testApi from './views/project/api/updateApi/TestApi.vue'
import AutomationTest from './views/project/AutomationTest.vue'
import ProjectMember from './views/project/ProjectMember.vue'
import ProjectDynamic from './views/project/ProjectDynamic.vue'
import ProjectTitle from './views/project/projectTitle/ProjectTitle.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true,
        projectHidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true,
        projectHidden: true
    },
    {
        path: '/',
        component: Home,
        name: '',
        projectHidden: true,
        children: [
            { path: '/projectList', component: projectList, iconCls:'el-icon-message', name: '项目列表'},
            { path: '/monkey', component: Monkey, iconCls:'fa fa-id-card-o', name: 'Moneky测试'},
            { path: '/about', component: About, iconCls:'fa fa-address-card', name: '关于我们'},
            ]
    },
    {
        path: '*',
        hidden: true,
        projectHidden: true,
        redirect: { path: '/404' }
    },    
    {
        path: '/project/:project_id',
        component: ProjectInfo,
        name: '项目',
        hidden: true,
        children: [
            {   path: '/ProjectTitle/:project_id', component: ProjectTitle, name: '项目概况', leaf: true},
            {   path: '/Globalhost/:project_id', component: globalHost, name: 'Host配置', leaf: true},
            {   path: '/api/:project_id',
                    component: API,
                    name: 'API接口', 
                    leaf: true,
                    child: true,
                    children: [
                        {   path: '/apiList/:project_id', component: ApiList, name: '接口列表'},
                        {   path: '/apiList/:project_id/:firstGroup/:secondGroup', component: ApiListGroup, name: '分组接口列表'},
                        {   path: '/fastTest/:project_id', component: FestTest, name: '快速测试'},
                        {   path: '/addApi/:project_id', component: addApi, name: '新增接口'},
                        {   path: '/detail/:project_id/:api_id',
                            component: detail,
                            name: '接口',
                            children: [
                                { path: '/apiInfo/:project_id/:api_id', component: ApiInfo, name: '基础信息'},
                                { path: '/testApi/:project_id/:api_id', component: testApi, name: '测试'}
                            ]
                        }
                    ]},
            {   path: '/automationTest/:project_id', component: AutomationTest, name: '自动化测试', leaf: true},
            {   path: '/projectMember/:project_id', component: ProjectMember, name: '成员管理', leaf: true},
            {   path: '/projectDynamic/:project_id', component: ProjectDynamic, name: '项目动态', leaf: true},
            ]
    },
];

export default routes;