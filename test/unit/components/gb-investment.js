import { shallowMount } from "@vue/test-utils";
import Component from "../../../components/gb-investment/GbInvestment";
import { getView } from "../localVue";
import { gbsData } from "../../../lib/foe-data/gbs";
import Errors from "../../../scripts/errors";

const defaultGb = gbsData.Observatory;

const factory = (propsData = {}, mocks = {}) => {
  const { localVue, store } = getView();
  return shallowMount(Component, {
    propsData: {
      gb: defaultGb,
      ...propsData
    },
    localVue: localVue,
    store: store,
    mocks: {
      $route: {
        query: {},
        params: {
          gb: "root"
        }
      },
      ...mocks
    }
  });
};

const defaultInvestorPercentageCustom = [90, 90, 90, 90, 90];
const defaultResult = {
  cost: 650,
  investment: [
    {
      cumulativeInvestment: 526,
      expectedParticipation: 124,
      isInvestorParticipation: false,
      participation: 124,
      preparation: 402,
      reward: 65,
      roi: 0,
      snipe: { fp: 325, roi: -201 }
    },
    {
      cumulativeInvestment: 593,
      expectedParticipation: 67,
      isInvestorParticipation: false,
      participation: 67,
      preparation: 402,
      reward: 35,
      roi: 0,
      snipe: { fp: 325, roi: -258 }
    },
    {
      cumulativeInvestment: 631,
      expectedParticipation: 19,
      isInvestorParticipation: false,
      participation: 19,
      preparation: 421,
      reward: 10,
      roi: 0,
      snipe: { fp: 325, roi: -306 }
    },
    {
      cumulativeInvestment: 641,
      expectedParticipation: 10,
      isInvestorParticipation: false,
      participation: 10,
      preparation: 421,
      reward: 5,
      roi: 0,
      snipe: { fp: 325, roi: -315 }
    },
    {
      expectedParticipation: 0,
      isInvestorParticipation: false,
      preparation: 430,
      reward: 0,
      roi: 0,
      snipe: { fp: 0, roi: 0 }
    }
  ],
  level: 10,
  otherInvestment: [],
  totalPreparations: 430
};

describe("GbInvestment", () => {
  test("Is a Vue instance", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("Initialize with URL query", () => {
    const investorPercentageCustom = [92, 91, 90, 85, 80];
    const investorParticipation = [10, 8, 6, 4, 2];
    const wrapper = factory(defaultGb, {
      $route: {
        query: {
          gbi_l: 20,
          gbi_oi: 21,
          gbi_ipg: 90,
          gbi_px: "foo",
          gbi_sx: "bar",
          gbi_sn: "1",
          gbi_dgbn: "0",
          gbi_sl: "1",
          gbi_p1: investorPercentageCustom[0],
          gbi_p2: investorPercentageCustom[1],
          gbi_p3: investorPercentageCustom[2],
          gbi_p4: investorPercentageCustom[3],
          gbi_p5: investorPercentageCustom[4],
          gbi_ip: JSON.stringify(investorParticipation),
          gbi_pFree1: "0",
          gbi_pFree2: "0",
          gbi_pFree3: "1",
          gbi_pFree4: "1",
          gbi_pFree5: "1",
          gbi_ss: "1",
          gbi_yab: "90"
        },
        params: {
          gb: "root"
        }
      }
    });

    expect(wrapper.vm.level).toBe(20);
    expect(wrapper.vm.ownerInvestment).toBe(21);
    expect(wrapper.vm.investorPercentageGlobal).toBe(90);
    expect(wrapper.vm.prefix).toBe("foo");
    expect(wrapper.vm.suffix).toBe("bar");
    expect(wrapper.vm.displayGbName).toBe(false);
    expect(wrapper.vm.shortName).toBe(true);
    expect(wrapper.vm.showLevel).toBe(true);
    expect(wrapper.vm.showSnipe).toBe(true);
    expect(wrapper.vm.yourArcBonus).toBe(90);
    expect(wrapper.vm.investorPercentageCustom).toEqual(investorPercentageCustom);
    expect(wrapper.vm.investorParticipation).toEqual(investorParticipation);
    expect(wrapper.vm.placeFree).toEqual([
      { state: false },
      { state: false },
      { state: true },
      { state: true },
      { state: true }
    ]);
  });

  test("Initialize with cookies", () => {
    const investorPercentageCustom = [92, 91, 90, 85, 80];
    const investorParticipation = [10, 8, 6, 4, 2];

    const wrapper = factory(defaultGb, {
      $cookies: {
        get: key => {
          switch (key) {
            case "root_level":
              return 20;
            case "root_ownerInvestment":
              return 21;
            case "root_investorPercentageGlobal":
              return 90;
            case "gbPrefix":
              return "foo";
            case "gbSuffix":
              return "bar";
            case "shortName":
              return true;
            case "displayGbName":
              return false;
            case "showLevel":
              return true;
            case "root_investorPercentageCustom_0":
              return 92;
            case "root_investorPercentageCustom_1":
              return 91;
            case "root_investorPercentageCustom_2":
              return 90;
            case "root_investorPercentageCustom_3":
              return 85;
            case "root_investorPercentageCustom_4":
              return 80;
            case "root_investorParticipation":
              return investorParticipation;
            case "showSnipe":
              return true;
            case "yourArcBonus":
              return 90;
            case "displayTableCard":
              return true;
          }
        }
      }
    });

    expect(wrapper.vm.level).toBe(20);
    expect(wrapper.vm.ownerInvestment).toBe(21);
    expect(wrapper.vm.investorPercentageGlobal).toBe(90);
    expect(wrapper.vm.prefix).toBe("foo");
    expect(wrapper.vm.suffix).toBe("bar");
    expect(wrapper.vm.displayGbName).toBe(false);
    expect(wrapper.vm.shortName).toBe(true);
    expect(wrapper.vm.showLevel).toBe(true);
    expect(wrapper.vm.showSnipe).toBe(true);
    expect(wrapper.vm.yourArcBonus).toBe(90);
    expect(wrapper.vm.investorPercentageCustom).toEqual(investorPercentageCustom);
    expect(wrapper.vm.investorParticipation).toEqual(investorParticipation);
  });

  test('Change "level" value', () => {
    const wrapper = factory();
    const newValue = 15;
    expect(wrapper.vm.level).toBe(10);
    wrapper.vm.level = newValue;
    expect(wrapper.vm.level).toBe(newValue);
    expect(wrapper.vm.ownerInvestment).toBe(0);
    expect(wrapper.vm.investorParticipation).toEqual([]);
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"]["gbi_l"]).toBe(newValue);
  });

  test('Change "level" invalid value', () => {
    const wrapper = factory();
    const newValue = -1;
    expect(wrapper.vm.level).toBe(10);
    wrapper.vm.level = newValue;
    expect(wrapper.vm.level).toBe(newValue);
    expect(wrapper.vm.ownerInvestment).toBe(0);
    expect(wrapper.vm.investorParticipation).toEqual([]);
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"]["gbi_l"]).toBe(10);
  });

  test('Change "level" invalid type', () => {
    const wrapper = factory();
    const newValue = "foo";
    expect(wrapper.vm.level).toBe(10);
    wrapper.vm.level = newValue;
    expect(wrapper.vm.level).toBe(newValue);
    expect(wrapper.vm.errors.level).toBeTruthy();
    expect(wrapper.vm.ownerInvestment).toBe(0);
    expect(wrapper.vm.investorParticipation).toEqual([]);
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"]["gbi_l"]).toBe(10);
  });

  test('Change "ownerInvestment" value', () => {
    const wrapper = factory();
    const newValue = 15;
    expect(wrapper.vm.ownerInvestment).toBe(0);
    wrapper.vm.ownerInvestment = newValue;
    expect(wrapper.vm.ownerInvestment).toBe(newValue);
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"]["gbi_oi"]).toBe(newValue);
  });

  test('Change "ownerInvestment" invalid value', () => {
    const wrapper = factory();
    const newValue = -1;
    expect(wrapper.vm.ownerInvestment).toBe(0);
    wrapper.vm.ownerInvestment = newValue;
    expect(wrapper.vm.ownerInvestment).toBe(newValue);
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"]["gbi_oi"]).toBe(0);
  });

  test('Change "ownerInvestment" invalid type', () => {
    const wrapper = factory();
    const newValue = "foo";
    expect(wrapper.vm.ownerInvestment).toBe(0);
    wrapper.vm.ownerInvestment = newValue;
    expect(wrapper.vm.ownerInvestment).toBe(newValue);
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"]["gbi_oi"]).toBe(0);
  });

  test('Change "addInvestors" value', () => {
    const wrapper = factory();
    const newValue = 15;
    expect(wrapper.vm.addInvestors).toBe(1);
    wrapper.vm.addInvestors = newValue;
    expect(wrapper.vm.addInvestors).toBe(newValue);
    expect(wrapper.vm.errors.addInvestors).toBe(false);
  });

  test('Change "addInvestors" invalid value', () => {
    const wrapper = factory();
    const newValue = -1;
    expect(wrapper.vm.addInvestors).toBe(1);
    wrapper.vm.addInvestors = newValue;
    expect(wrapper.vm.addInvestors).toBe(newValue);
    expect(wrapper.vm.errors.addInvestors).toBe(true);
  });

  test('Change "addInvestors" invalid type', () => {
    const wrapper = factory();
    const newValue = "foo";
    expect(wrapper.vm.addInvestors).toBe(1);
    wrapper.vm.addInvestors = newValue;
    expect(wrapper.vm.addInvestors).toBe(newValue);
    expect(wrapper.vm.errors.addInvestors).toBe(true);
  });

  test('Change "investorPercentageGlobal" value', () => {
    const wrapper = factory();
    const newValue = 80;
    expect(wrapper.vm.investorPercentageGlobal).toBe(90);
    wrapper.vm.investorPercentageGlobal = newValue;
    expect(wrapper.vm.investorPercentageGlobal).toBe(newValue);
    expect(wrapper.vm.ownerInvestment).toBe(0);
    for (let i = 0; i < wrapper.vm.investorPercentageCustom.length; i++) {
      expect(wrapper.vm.investorPercentageCustom[i]).toBe(newValue);
      expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"][`gbi_p${i + 1}`]).toBe(newValue);
    }
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"]["gbi_ipg"]).toBe(newValue);
  });

  test('Change "investorPercentageGlobal" invalid value', () => {
    const wrapper = factory();
    const newValue = -1;
    expect(wrapper.vm.investorPercentageGlobal).toBe(90);
    wrapper.vm.investorPercentageGlobal = newValue;
    expect(wrapper.vm.investorPercentageGlobal).toBe(newValue);
    expect(wrapper.vm.ownerInvestment).toBe(0);
    for (let i = 0; i < wrapper.vm.investorPercentageCustom.length; i++) {
      expect(wrapper.vm.investorPercentageCustom[i]).toBe(90);
      expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"][`gbi_p${i + 1}`]).toBe(90);
    }
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"]["gbi_ipg"]).toBe(90);
  });

  test('Change "investorPercentageGlobal" invalid type', () => {
    const wrapper = factory();
    const newValue = "foo";
    expect(wrapper.vm.investorPercentageGlobal).toBe(90);
    wrapper.vm.investorPercentageGlobal = newValue;
    expect(wrapper.vm.investorPercentageGlobal).toBe(newValue);
    expect(wrapper.vm.ownerInvestment).toBe(0);
    for (let i = 0; i < wrapper.vm.investorPercentageCustom.length; i++) {
      expect(wrapper.vm.investorPercentageCustom[i]).toBe(90);
      expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"][`gbi_p${i + 1}`]).toBe(90);
    }
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"]["gbi_ipg"]).toBe(90);
  });

  test('Change "investorPercentageCustom" value', () => {
    const wrapper = factory();
    const newValue = [92, 91, 90, 85, 80];
    expect(wrapper.vm.investorPercentageCustom).toEqual(defaultInvestorPercentageCustom);
    wrapper.vm.investorPercentageCustom = newValue;

    for (let i = 0; i < wrapper.vm.investorPercentageCustom.length; i++) {
      expect(wrapper.vm.investorPercentageCustom[i]).toBe(newValue[i]);
      expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"][`gbi_p${i + 1}`]).toBe(newValue[i]);
    }
  });

  test('Change "investorPercentageCustom" invalid value', () => {
    const wrapper = factory();
    const newValue = [90, -1, 90, 90, 90];
    expect(wrapper.vm.investorPercentageCustom).toEqual(defaultInvestorPercentageCustom);
    wrapper.vm.investorPercentageCustom = newValue;

    for (let i = 0; i < wrapper.vm.investorPercentageCustom.length; i++) {
      expect(wrapper.vm.investorPercentageCustom[i]).toBe(newValue[i]);
      expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"][`gbi_p${i + 1}`]).toBe(90);
    }
  });

  test('Change "yourArcBonus" value', () => {
    const wrapper = factory();
    expect(wrapper.vm.yourArcBonus).toBe(90.6);
    expect(wrapper.vm.errors.yourArcBonus).toBeFalsy();
    wrapper.vm.yourArcBonus = 123;
    expect(wrapper.vm.yourArcBonus).toBe(123);
    expect(wrapper.vm.errors.yourArcBonus).toBeFalsy();
  });

  test('Change "yourArcBonus" invalid value', () => {
    const wrapper = factory();
    expect(wrapper.vm.yourArcBonus).toBe(90.6);
    expect(wrapper.vm.errors.yourArcBonus).toBeFalsy();
    wrapper.vm.yourArcBonus = -1;
    expect(wrapper.vm.yourArcBonus).toBe(-1);
    expect(wrapper.vm.errors.yourArcBonus).toBeTruthy();
  });

  test('Change "yourArcBonus" invalid type', () => {
    const wrapper = factory();
    const invalidValueType = "foo";
    expect(wrapper.vm.yourArcBonus).toBe(90.6);
    expect(wrapper.vm.errors.yourArcBonus).toBeFalsy();
    wrapper.vm.yourArcBonus = invalidValueType;
    expect(wrapper.vm.yourArcBonus).toBe(invalidValueType);
    expect(wrapper.vm.errors.yourArcBonus).toBeFalsy();
  });

  test('Change "displayGbName" value', () => {
    const wrapper = factory();
    const newValue = false;
    expect(wrapper.vm.displayGbName).toBe(true);
    wrapper.vm.displayGbName = newValue;
    expect(wrapper.vm.displayGbName).toBe(newValue);
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"]["gbi_dgbn"]).toBe(newValue ? 1 : 0);
    expect(wrapper.vm.$cookies.set.mock.calls[wrapper.vm.$cookies.set.mock.calls.length - 1]).toEqual([
      "displayGbName",
      false,
      {
        path: "/",
        expires: wrapper.vm.$cookies.set.mock.calls[wrapper.vm.$cookies.set.mock.calls.length - 1][2].expires
      }
    ]);
  });

  test('Change "prefix" value', () => {
    const wrapper = factory();
    const newValue = "foo";
    expect(wrapper.vm.prefix).toBe("");
    wrapper.vm.prefix = newValue;
    expect(wrapper.vm.prefix).toBe(newValue);
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"]["gbi_px"]).toBe(newValue);
    expect(wrapper.vm.$cookies.set.mock.calls[wrapper.vm.$cookies.set.mock.calls.length - 1]).toEqual([
      "gbPrefix",
      "foo",
      {
        path: "/",
        expires: wrapper.vm.$cookies.set.mock.calls[wrapper.vm.$cookies.set.mock.calls.length - 1][2].expires
      }
    ]);
  });

  test('Change "suffix" value', () => {
    const wrapper = factory();
    const newValue = "bar";
    expect(wrapper.vm.suffix).toBe("");
    wrapper.vm.suffix = newValue;
    expect(wrapper.vm.suffix).toBe(newValue);
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"]["gbi_sx"]).toBe(newValue);
    expect(wrapper.vm.$cookies.set.mock.calls[wrapper.vm.$cookies.set.mock.calls.length - 1]).toEqual([
      "gbSuffix",
      "bar",
      {
        path: "/",
        expires: wrapper.vm.$cookies.set.mock.calls[wrapper.vm.$cookies.set.mock.calls.length - 1][2].expires
      }
    ]);
  });

  test('Change "shortName" value', () => {
    const wrapper = factory();
    const newValue = true;
    expect(wrapper.vm.shortName).toBe(false);
    wrapper.vm.shortName = newValue;
    expect(wrapper.vm.shortName).toBe(newValue);
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"]["gbi_sn"]).toBe(newValue ? 1 : 0);
    expect(wrapper.vm.$cookies.set.mock.calls[wrapper.vm.$cookies.set.mock.calls.length - 1]).toEqual([
      "shortName",
      true,
      {
        path: "/",
        expires: wrapper.vm.$cookies.set.mock.calls[wrapper.vm.$cookies.set.mock.calls.length - 1][2].expires
      }
    ]);
  });

  test('Change "showLevel" value', () => {
    const wrapper = factory();
    const newValue = true;
    expect(wrapper.vm.showLevel).toBe(false);
    wrapper.vm.showLevel = newValue;
    expect(wrapper.vm.showLevel).toBe(newValue);
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"]["gbi_sl"]).toBe(newValue ? 1 : 0);
    expect(wrapper.vm.$cookies.set.mock.calls[wrapper.vm.$cookies.set.mock.calls.length - 1]).toEqual([
      "showLevel",
      true,
      {
        path: "/",
        expires: wrapper.vm.$cookies.set.mock.calls[wrapper.vm.$cookies.set.mock.calls.length - 1][2].expires
      }
    ]);
  });

  test('Change "showSnipe" value', () => {
    const wrapper = factory();
    const newValue = true;
    expect(wrapper.vm.showSnipe).toBe(false);
    wrapper.vm.showSnipe = newValue;
    expect(wrapper.vm.showSnipe).toBe(newValue);
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"]["gbi_ss"]).toBe(newValue ? 1 : 0);
    expect(wrapper.vm.$cookies.set.mock.calls[wrapper.vm.$cookies.set.mock.calls.length - 1]).toEqual([
      "showSnipe",
      true,
      {
        path: "/",
        expires: wrapper.vm.$cookies.set.mock.calls[wrapper.vm.$cookies.set.mock.calls.length - 1][2].expires
      }
    ]);
  });

  test('Change "displayTableCard" value', () => {
    const wrapper = factory();
    const newValue = true;
    expect(wrapper.vm.displayTableCard).toBe(false);
    wrapper.vm.displayTableCard = newValue;
    expect(wrapper.vm.displayTableCard).toBe(newValue);
    expect(wrapper.vm.$cookies.set.mock.calls[wrapper.vm.$cookies.set.mock.calls.length - 1]).toEqual([
      "displayTableCard",
      true,
      {
        path: "/",
        expires: wrapper.vm.$cookies.set.mock.calls[wrapper.vm.$cookies.set.mock.calls.length - 1][2].expires
      }
    ]);
  });

  test('Change "result" value', () => {
    const wrapper = factory();
    const newValue = {
      cost: 650,
      investment: [
        {
          cumulativeInvestment: 526,
          expectedParticipation: 124,
          isInvestorParticipation: false,
          participation: 124,
          preparation: 402,
          reward: 65,
          roi: 0,
          snipe: { fp: 325, roi: -201 }
        },
        {
          cumulativeInvestment: 593,
          expectedParticipation: 67,
          isInvestorParticipation: false,
          participation: 67,
          preparation: 402,
          reward: 35,
          roi: 0,
          snipe: { fp: 325, roi: -258 }
        },
        {
          cumulativeInvestment: 631,
          expectedParticipation: 19,
          isInvestorParticipation: false,
          participation: 19,
          preparation: 421,
          reward: 10,
          roi: 0,
          snipe: { fp: 325, roi: -306 }
        },
        {
          cumulativeInvestment: 641,
          expectedParticipation: 10,
          isInvestorParticipation: false,
          participation: 10,
          preparation: 421,
          reward: 5,
          roi: 0,
          snipe: { fp: 325, roi: -315 }
        },
        {
          expectedParticipation: 0,
          isInvestorParticipation: false,
          preparation: 430,
          reward: 0,
          roi: 0,
          snipe: { fp: 0, roi: 0 }
        }
      ],
      level: 10,
      otherInvestment: [],
      totalPreparations: 430
    };
    const promotionMessages = [
      { active: false, message: "Observatory P1(124) P2(67) P3(19) P4(10)" },
      { active: false, message: "P1(124) P2(67) P3(19) P4(10) Observatory" },
      { active: false, message: "Observatory P4(10) P3(19) P2(67) P1(124)" },
      { active: false, message: "P4(10) P3(19) P2(67) P1(124) Observatory" },
      { active: false, message: "Observatory 1 2 3 4" },
      { active: false, message: "Observatory 4 3 2 1" }
    ];
    expect(wrapper.vm.result).toEqual(defaultResult);
    wrapper.vm.result = newValue;
    expect(wrapper.vm.result).toEqual(newValue);
    expect(wrapper.vm.promotion).toEqual(promotionMessages);
  });

  test('Change "result" value with null value', () => {
    const wrapper = factory();
    const newValue = null;
    expect(wrapper.vm.result).toEqual(defaultResult);
    wrapper.vm.result = newValue;
    expect(wrapper.vm.result).toEqual(null);
    expect(wrapper.vm.promotion).toEqual([]);
  });

  test('Change "lang" value', async () => {
    const wrapper = factory();
    const promotionMessages = [
      { message: "Observatoire P1(124) P2(67) P3(19) P4(10)", active: false },
      { message: "P1(124) P2(67) P3(19) P4(10) Observatoire", active: false },
      { message: "Observatoire P4(10) P3(19) P2(67) P1(124)", active: false },
      { message: "P4(10) P3(19) P2(67) P1(124) Observatoire", active: false },
      { message: "Observatoire 1 2 3 4", active: false },
      { message: "Observatoire 4 3 2 1", active: false }
    ];

    await wrapper.vm.i18n.i18next.changeLanguage("fr");
    wrapper.vm.$store.state.locale = "fr";

    expect(wrapper.vm.promotion).toEqual(promotionMessages);
  });

  test('Change "lang" value with null result', async () => {
    const wrapper = factory();
    const newValue = null;
    wrapper.vm.result = newValue;

    await wrapper.vm.i18n.i18next.changeLanguage("fr");
    wrapper.vm.$store.state.locale = "fr";

    expect(wrapper.vm.promotion).toEqual([]);
  });

  test('Call "goTo"', () => {
    const wrapper = factory(
      {},
      {
        $router: {
          push: jest.fn()
        }
      }
    );
    wrapper.vm.goTo("foo");
    expect(wrapper.vm.$router.push.mock.calls.length).toBe(1);
    expect(wrapper.vm.$router.push.mock.calls[0][0]).toEqual("/gb-investment/foo/");
  });

  test('Call "calculate" with invalid data', () => {
    const wrapper = factory();
    wrapper.vm.level = -1;
    expect(() => wrapper.vm.calculate()).toThrow(
      Errors.NotInBoundsError(
        -1,
        1,
        gbsData.Observatory.levels.length,
        'for parameter "currentLevel" of ' +
          "ComputeLevelInvestment(levelCost, currentDeposits, yourParticipation, otherParticipation, " +
          "yourArcBonus, fpTargetReward)"
      )
    );
  });

  test('Call "successCopy" with invalid data', () => {
    jest.useFakeTimers();
    const wrapper = factory();
    const index = 0;
    wrapper.vm.calculate();
    wrapper.vm.successCopy(index);
    expect(wrapper.vm.promotion[index].active).toBe(true);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
  });

  test('Call "changePlaceFree" with invalid data', () => {
    const wrapper = factory();
    const index = 0;
    const value = false;
    const promotion = [
      { message: "Observatory P2(67) P3(19) P4(10)", active: false },
      { message: "P2(67) P3(19) P4(10) Observatory", active: false },
      { message: "Observatory P4(10) P3(19) P2(67)", active: false },
      { message: "P4(10) P3(19) P2(67) Observatory", active: false },
      { message: "Observatory 2 3 4", active: false },
      { message: "Observatory 4 3 2", active: false }
    ];
    wrapper.vm.calculate();
    wrapper.vm.changePlaceFree(index, value);
    expect(wrapper.vm.placeFree[index].state).toBe(value);
    expect(wrapper.vm.promotion).toEqual(promotion);
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"][`gbi_pFree${index + 1}`]).toBe(value ? 1 : 0);
  });

  test('Call "addInvestor"', () => {
    const wrapper = factory();
    expect(wrapper.vm.investorParticipation).toEqual([]);
    wrapper.vm.addInvestor();
    expect(wrapper.vm.investorParticipation).toEqual([1]);
  });

  test('Call "addInvestor" with big value', () => {
    const wrapper = factory();
    expect(wrapper.vm.investorParticipation).toEqual([]);
    wrapper.vm.addInvestors = defaultGb.levels[9].cost / 2 + 1;
    wrapper.vm.addInvestor();
    expect(wrapper.vm.investorParticipation).toEqual([326]);
    expect(wrapper.vm.addInvestors).toBe(1);
  });

  test('Call "addInvestor" with invalid value', () => {
    const wrapper = factory();
    expect(wrapper.vm.investorParticipation).toEqual([]);
    wrapper.vm.addInvestors = -1;
    wrapper.vm.addInvestor();
    expect(wrapper.vm.investorParticipation).toEqual([]);
  });

  test('Call "addInvestor" with invalid type', () => {
    const wrapper = factory();
    expect(wrapper.vm.investorParticipation).toEqual([]);
    wrapper.vm.addInvestors = "foo";
    wrapper.vm.addInvestor();
    expect(wrapper.vm.investorParticipation).toEqual([]);
  });

  test('Call "removeInvestor"', () => {
    const wrapper = factory();
    expect(wrapper.vm.investorParticipation).toEqual([]);
    wrapper.vm.addInvestors = defaultGb.levels[9].cost / 2 + 1;
    wrapper.vm.addInvestor();
    wrapper.vm.addInvestors = 5;
    wrapper.vm.addInvestor();
    wrapper.vm.addInvestors = 1;
    wrapper.vm.addInvestor();
    expect(wrapper.vm.investorParticipation).toEqual([326, 5, 1]);
    wrapper.vm.removeInvestor(1);
    expect(wrapper.vm.investorParticipation).toEqual([326, 1]);
  });

  test('Call "removeInvestor" with invalid index', () => {
    const wrapper = factory();
    expect(wrapper.vm.investorParticipation).toEqual([]);
    wrapper.vm.addInvestors = defaultGb.levels[9].cost / 2 + 1;
    wrapper.vm.addInvestor();
    wrapper.vm.addInvestors = 5;
    wrapper.vm.addInvestor();
    expect(wrapper.vm.investorParticipation).toEqual([326, 5]);
    wrapper.vm.removeInvestor(-1);
    expect(wrapper.vm.investorParticipation).toEqual([326, 5]);
  });

  test('Call "calculate" with maxInvestment < 0', () => {
    const wrapper = factory({ gb: gbsData.Himeji_Castle });
    expect(wrapper.vm.investorParticipation).toEqual([]);
    wrapper.vm.ownerInvestment = 500;
    wrapper.vm.addInvestors = 10;
    wrapper.vm.addInvestor();
    wrapper.vm.addInvestors = 100;
    wrapper.vm.addInvestor();
    wrapper.vm.addInvestors = 500;
    wrapper.vm.addInvestor();
    wrapper.vm.ownerInvestment = 1000;
    wrapper.vm.calculate();
    expect(wrapper.vm.result).toMatchSnapshot();
  });
});
