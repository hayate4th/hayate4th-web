import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// TODO: 文言を言語ごとのファイルにする
i18n.use(initReactI18next).init({
    defaultNS: "translations",
    fallbackLng: "ja",
    interpolation: {
        escapeValue: false,
    },
    lng: "ja",
    resources: {
        en: {
            translations: {
                "Main Title": "hayate4th's room",
                "Education Title": "Education",
                "Education Junior High": "Hiroo Gakuen Junior High School",
                "Education Junior High Period": "2008 Apr - 2011 Mar",
                "Education High": "Hiroo Gakuen Senior High School",
                "Education High Period": "2011 Apr - 2014 Mar",
                "Education University": "College of Information Science, University of Tsukuba",
                "Education University Period": "2014 Apr - 2018 Mar",
                "Education Graduate": "Department of Computer Science, Graduate school of Systems and Information Science, University of Tsukuba (leave)",
                "Education Graduate Period": "2018 Apr - 2019 Mar"
            }
        },
        ja: {
            translations: {
                "Main Title": "hayate4thの部屋",
                "Education Title": "学歴",
                "Education Junior High": "広尾学園 中学校",
                "Education Junior High Period": "2008.04 - 2011.03",
                "Education High": "広尾学園 高等学校",
                "Education High Period": "2011.04 - 2014.03",
                "Education University": "筑波大学 情報学群 情報科学類",
                "Education University Period": "2014.04 - 2018.03",
                "Education Graduate": "筑波大学大学院 システム情報工学研究科 コンピュータサイエンス専攻 (中途退学)",
                "Education Graduate Period": "2018.04 - 2019.03"
            }
        }
    }
});

export default i18n;