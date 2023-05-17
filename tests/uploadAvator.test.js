import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import uploadAvatar from '../src/components/uploadAvatar.vue'

// 描述一组测试，包括名称和包括的测试项目
describe('test uploadAvatar',()=>{
    // 一个测试
    it('should render',()=>{
        // 需要将组件实例化之后才可以进行测试
        const wrapper = mount(uploadAvatar,{
            
        })
        // 看看组件里面包不包括'头像'这个字符串
        expect(wrapper.text()).contain('头像')
    })
})