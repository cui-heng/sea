import Vue from 'vue';
import adviserPhoneModal from '@/components/biz-adviser-modal/phone.vue';
import adviserWechatModal from '@/components/biz-adviser-modal/wechat.vue';

const AdviserPhoneModalConstructor = Vue.extend(adviserPhoneModal);
const AdviserWechatModalConstructor = Vue.extend(adviserWechatModal);

function createAdviserModalInstance(AdviserConstructor) {
  const instance = new AdviserConstructor({
    el: document.createElement('div')
  });

  document.body.appendChild(instance.$el);

  return {
    open(adviser) {
      instance.visible = true;
      instance.adviser = adviser;
    },
    close() {
      instance.visible = false;
    }
  }
}

export default (context, inject) => {
  /**
   * inject adviser
   */
  inject('adviser', {
    phone: createAdviserModalInstance(AdviserPhoneModalConstructor),
    wechat: createAdviserModalInstance(AdviserWechatModalConstructor)
  });
}
