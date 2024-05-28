import { PageInterface } from './interfaces'

const test_data: PageInterface[] = [
    {
      name: "사업현황",
      url: "url1",
      contents: [
        {
          title: "사업명",
          inputForms: [
            [{
              label: '단위사업',
              inputType: 'text',
            }],
            [{
                label: '세부사업',
                inputType: 'text',
              },
              {
                label: '내역사업',
                inputType: 'text',
              }
            ],
          ]
        },

        {
          title: "기본정보",
          inputForms: [
            [{
              label: '사업구분',
              inputType: 'radio',
              options: [
                '계속사업', '기한사업'
              ]
            }],
            [{
              label: '사업추진방식',
              inputType: 'radio',
              options: [
                '상향식', '혼합식', '하향식'
              ]
            }],
            [{
                label: '총사업비',
                inputType: 'text',
              },
              {
                label: '사업규모',
                inputType: 'text',
              }
            ],
            [{
                label: '사업기간',
                inputType: 'text',
              },
              {
                label: '사업유형',
                inputType: 'text',
              }
            ],
            [{
                label: '지원형태',
                inputType: 'text',
              },
              {
                label: '지원대상',
                inputType: 'text',
              }
            ],
            [{
                label: '초격차 분야(대)',
                inputType: 'text',
              },
              {
                label: '초격차 분야(중)',
                inputType: 'text',
              }
            ],
            [{
                label: '다 부처 여부',
                inputType: 'radio',
                options: [
                    '부', '단일형', '복합형'
                ]
              },
              {
                label: '참여부처\n(다부처 경우)',
                inputType: 'text',
              }
            ],
            [{
                label:"PD기획 여부",
                inputType: 'radio',
                options: [
                    '부', '여'
                ]
            }],
            [{
                label:"예타수행 여부",
                inputType: 'radio',
                options: [
                    '부', '여'
                ]
            }]
          ]
        },

        {
            title: "담당자 정보",
            inputForms: [
                [{
                    label: "기관정보",
                    inputType: "text"
                }, {
                    label: "담당자명",
                    inputType: "text"
                }],
                [{
                    label: "전화번호",
                    inputType: "text"
                }, {
                    label: "E-mail",
                    inputType: "text"
                }],
                [{
                    label: "기관정보",
                    inputType: "text"
                }, {
                    label: "담당자명",
                    inputType: "text"
                }],
                [{
                    label: "전화번호",
                    inputType: "text"
                }, {
                    label: "E-mail",
                    inputType: "text"
                }],
            ]
        },

        {
            title: "사업 목적",
            inputForms: [
                [{
                    label: "사업목적(요약)",
                    inputType: "text"
                }],
                [{
                    label: "주요목표",
                    inputType: "text"
                }],
                [{
                    label: "기대효과",
                    inputType: "text"
                }],
                [{
                    label: "활용전략",
                    inputType: "text"
                }],
            ]
        }
      ]
    },
    {
      name: "예산현황",
      url: "url2",
      contents: [
        {
          title: "기초정보",
          inputForms: [
            [{
              label: 'textLabel12',
              inputType: 'text',
            }],
            [{
                label: 'textLabel22',
                inputType: 'text',
              },
              {
                label: 'textLabel32',
                inputType: 'text',
              }],
            [{
              label: 'selectLabel2',
              inputType: 'select',
              options: ['Select1', 'Select2', 'Select3'],
            }],
            [{
              label: 'radioLabel2',
              inputType: 'radio',
              options: ['Radio 1', 'Radio 2', 'Radio 3']
            }]
          ]
        },
        {
            title: "표",
            tableForms: [
                ["구분", "2022년", "2023년", "2024년", "2025년(당해)"],
                ["당초예산", "000", "000", "000", "000"],
                ["집행예산", "{formula}000", "{formula}000", "{formula}000", "{formula}000"],
                ["실집행률(%)", "000", "000", "000", "000"],
            ]
        },
        {
            title: "야구성적 테이블",
            tableForms: [
                ["구분","삼성rntrnt", "한화", "엘지", "두산", "롯데"],
                ["작년성적", "6위", "2위", "1위", "5등", "꼴지"],
                ["올해성적", "6위", "2위", "1위", "5등", "꼴지"],
                ["계산", "{formula}a", "{formula}b", "{formula}c", "{formula}d", "{formula}e"],
            ]
        }
      ]
    },
    {
      name: "사업성과",
      url: "url3",
      contents: []
    },
    {
      name: "우수성과",
      url: "url4",
      contents: []
    },
    {
      name: "과제목록",
      url: "url5",
      contents: []
    }
  ]

export default test_data;