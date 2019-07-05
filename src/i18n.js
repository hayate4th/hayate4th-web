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
                "Education Graduate Period": "2018 Apr - 2019 Mar",
                "Work Experience Title": "Work Experience",
                "Work Experience SWC": "サイエンスウェブ株式会社",
                "Work Experience SWC Position and Period": "Part-time (Web Coding) 2015 Dec - 2017 Apr",
                "Work Experience AIST": "National Institute of Advanced Industrial Science and Technology",
                "Work Experience AIST Position and Period": "Part-time (Neural Network) 2017 Jul - 2018 Mar",
                "Work Experience Y! Intern": "Yahoo Japan Corporation",
                "Work Experience Y! Intern Position and Period": "Engineer Internship (Web service development), 2018 Sep",
                "Work Experience GREE Intern": "GREE, Inc.",
                "Work Experience GREE Intern Position and Period": "GREE Camp (Engineer), 2018 Sep",
                "Work Experience Cybozu Intern": "Cybozu, Inc.",
                "Work Experience Cybozu Intern Position and Period": "Engineer Internship (Web service development), 2018 Sep",
                "Work Experience NN Intern": "NN Life Insurance",
                "Work Experience NN Intern Position and Period": "Internship (Software development and Data science), 2018 Oct - 2019 Mar",
                "Work Experience Cybozu": "Cybozu, Inc.",
                "Work Experience Cybozu Position and Period": "Engineer (Progammer) 2019 Apr -",
                "Contact Title": "Contact",
                "Contact twitter Icon altString": "Twitter logo",
                "Contact github Icon altString": "GitHub logo",
                "Contact linkedIn Icon altString": "linkedIn logo"

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
                "Education Graduate Period": "2018.04 - 2019.03",
                "Work Experience Title": "職歴",
                "Work Experience SWC": "サイエンスウェブ株式会社",
                "Work Experience SWC Position and Period": "アルバイト (ウェブコーディング) 2015.12 - 2017.04",
                "Work Experience AIST": "産業技術総合研究所",
                "Work Experience AIST Position and Period": "アルバイト (ニューラルネットワーク) 2017.07 - 2018.03",
                "Work Experience Y! Intern": "ヤフー株式会社",
                "Work Experience Y! Intern Position and Period": "エンジニアインターンシップ (Webサービス開発), 2018.09",
                "Work Experience GREE Intern": "グリー株式会社",
                "Work Experience GREE Intern Position and Period": "GREE Camp (エンジニア), 2018.09",
                "Work Experience Cybozu Intern": "サイボウズ株式会社",
                "Work Experience Cybozu Intern Position and Period": "エンジニアインターンシップ (Webサービス開発), 2018.09",
                "Work Experience NN Intern": "エヌエヌ生命保険株式会社",
                "Work Experience NN Intern Position and Period": "インターンシップ (ソフトウェア開発 & データサイエンス), 2018.10 - 2019.03",
                "Work Experience Cybozu": "サイボウズ株式会社",
                "Work Experience Cybozu Position and Period": "エンジニア (プログラマ) 2019.04 -",
                "Contact Title": "連絡先",
                "Contact twitter Icon altString": "ツイッターのロゴ",
                "Contact github Icon altString": "GitHub のロゴ",
                "Contact linkedIn Icon altString": "linkedIn のロゴ"
            }
        }
    }
});

export default i18n;