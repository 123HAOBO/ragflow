export const UserSettingBaseKey = 'user-setting';

export enum UserSettingRouteKey {
  Profile = 'profile',
  Password = 'password',
  Model = 'model',
  System = 'system',
  Api = 'api',
  Team = 'team',
  Logout = 'logout',
}

export const ProfileSettingBaseKey = 'profile-setting';

export enum ProfileSettingRouteKey {
  Profile = 'profile',
  Plan = 'plan',
  Model = 'model',
  System = 'system',
  Api = 'api',
  Team = 'team',
  Prompt = 'prompt',
  Chunk = 'chunk',
  Logout = 'logout',
}

// Please lowercase the file name
export const IconMap = {
  '埃典科技(ideal2077.com)': 'ideal',
  'Tongyi-Qianwen': 'tongyi',
  Moonshot: 'moonshot',
  OpenAI: 'openai',
  'ZHIPU-AI': 'zhipu',
  文心一言: 'wenxin',
  Ollama: 'ollama',
  Xinference: 'xinference',
  DeepSeek: 'deepseek',
  VolcEngine: 'volc_engine',
  BaiChuan: 'baichuan',
  Jina: 'jina',
  MiniMax: 'chat-minimax',
  Mistral: 'mistral',
  'Azure-OpenAI': 'azure',
  Bedrock: 'bedrock',
  Gemini: 'gemini',
  Groq: 'groq-next',
  OpenRouter: 'open-router',
  LocalAI: 'local-ai',
  StepFun: 'stepfun',
  NVIDIA: 'nvidia',
  'LM-Studio': 'lm-studio',
  'OpenAI-API-Compatible': 'openai-api',
  cohere: 'cohere',
  LeptonAI: 'lepton-ai',
  TogetherAI: 'together-ai',
  PerfXCloud: 'perfx-cloud',
  Upstage: 'upstage',
  'novita.ai': 'novita-ai',
  SILICONFLOW: 'siliconflow',
  PPIO: 'ppio',
  '01.AI': 'yi',
  Replicate: 'replicate',
  'Tencent Hunyuan': 'hunyuan',
  'XunFei Spark': 'spark',
  BaiduYiyan: 'yiyan',
  'Fish Audio': 'fish-audio',
  'Tencent Cloud': 'tencent-cloud',
  Anthropic: 'anthropic',
  'Voyage AI': 'voyage',
  'Google Cloud': 'google-cloud',
  HuggingFace: 'huggingface',
  Youdao: 'youdao',
  BAAI: 'baai',
  'nomic-ai': 'nomic-ai',
  jinaai: 'jina',
  'sentence-transformers': 'sentence-transformers',
  GPUStack: 'gpustack',
};

export const TimezoneList = [
  'UTC-11\tPacific/Midway',
  'UTC-11\tPacific/Niue',
  'UTC-11\tPacific/Pago_Pago',
  'UTC-10\tAmerica/Adak',
  'UTC-10\tPacific/Honolulu',
  'UTC-10\tPacific/Rarotonga',
  'UTC-10\tPacific/Tahiti',
  'UTC-9:30\tPacific/Marquesas',
  'UTC-9\tAmerica/Anchorage',
  'UTC-9\tAmerica/Juneau',
  'UTC-9\tAmerica/Metlakatla',
  'UTC-9\tAmerica/Nome',
  'UTC-9\tAmerica/Sitka',
  'UTC-9\tAmerica/Yakutat',
  'UTC-9\tPacific/Gambier',
  'UTC-8\tAmerica/Los_Angeles',
  'UTC-8\tAmerica/Tijuana',
  'UTC-8\tAmerica/Vancouver',
  'UTC-8\tPacific/Pitcairn',
  'UTC-7\tAmerica/Boise',
  'UTC-7\tAmerica/Cambridge_Bay',
  'UTC-7\tAmerica/Ciudad_Juarez',
  'UTC-7\tAmerica/Creston',
  'UTC-7\tAmerica/Dawson',
  'UTC-7\tAmerica/Dawson_Creek',
  'UTC-7\tAmerica/Denver',
  'UTC-7\tAmerica/Edmonton',
  'UTC-7\tAmerica/Fort_Nelson',
  'UTC-7\tAmerica/Hermosillo',
  'UTC-7\tAmerica/Inuvik',
  'UTC-7\tAmerica/Mazatlan',
  'UTC-7\tAmerica/Phoenix',
  'UTC-7\tAmerica/Whitehorse',
  'UTC-7\tAmerica/Yellowknife',
  'UTC-6\tAmerica/Bahia_Banderas',
  'UTC-6\tAmerica/Belize',
  'UTC-6\tAmerica/Chicago',
  'UTC-6\tAmerica/Chihuahua',
  'UTC-6\tAmerica/Costa_Rica',
  'UTC-6\tAmerica/El_Salvador',
  'UTC-6\tAmerica/Guatemala',
  'UTC-6\tAmerica/Indiana/Knox',
  'UTC-6\tAmerica/Indiana/Tell_City',
  'UTC-6\tAmerica/Managua',
  'UTC-6\tAmerica/Matamoros',
  'UTC-6\tAmerica/Menominee',
  'UTC-6\tAmerica/Merida',
  'UTC-6\tAmerica/Mexico_City',
  'UTC-6\tAmerica/Monterrey',
  'UTC-6\tAmerica/North_Dakota/Beulah',
  'UTC-6\tAmerica/North_Dakota/Center',
  'UTC-6\tAmerica/North_Dakota/New_Salem',
  'UTC-6\tAmerica/Ojinaga',
  'UTC-6\tAmerica/Rankin_Inlet',
  'UTC-6\tAmerica/Regina',
  'UTC-6\tAmerica/Resolute',
  'UTC-6\tAmerica/Swift_Current',
  'UTC-6\tAmerica/Tegucigalpa',
  'UTC-6\tAmerica/Winnipeg',
  'UTC-6\tPacific/Easter',
  'UTC-6\tPacific/Galapagos',
  'UTC-5\tAmerica/Atikokan',
  'UTC-5\tAmerica/Bogota',
  'UTC-5\tAmerica/Cancun',
  'UTC-5\tAmerica/Cayman',
  'UTC-5\tAmerica/Detroit',
  'UTC-5\tAmerica/Eirunepe',
  'UTC-5\tAmerica/Grand_Turk',
  'UTC-5\tAmerica/Guayaquil',
  'UTC-5\tAmerica/Havana',
  'UTC-5\tAmerica/Indiana/Indianapolis',
  'UTC-5\tAmerica/Indiana/Marengo',
  'UTC-5\tAmerica/Indiana/Petersburg',
  'UTC-5\tAmerica/Indiana/Vevay',
  'UTC-5\tAmerica/Indiana/Vincennes',
  'UTC-5\tAmerica/Indiana/Winamac',
  'UTC-5\tAmerica/Iqaluit',
  'UTC-5\tAmerica/Jamaica',
  'UTC-5\tAmerica/Kentucky/Louisville',
  'UTC-5\tAmerica/Kentucky/Monticello',
  'UTC-5\tAmerica/Lima',
  'UTC-5\tAmerica/Nassau',
  'UTC-5\tAmerica/New_York',
  'UTC-5\tAmerica/Panama',
  'UTC-5\tAmerica/Port-au-Prince',
  'UTC-5\tAmerica/Rio_Branco',
  'UTC-5\tAmerica/Toronto',
  'UTC-4\tAmerica/Anguilla',
  'UTC-4\tAmerica/Antigua',
  'UTC-4\tAmerica/Aruba',
  'UTC-4\tAmerica/Asuncion',
  'UTC-4\tAmerica/Barbados',
  'UTC-4\tAmerica/Blanc-Sablon',
  'UTC-4\tAmerica/Boa_Vista',
  'UTC-4\tAmerica/Campo_Grande',
  'UTC-4\tAmerica/Caracas',
  'UTC-4\tAmerica/Cuiaba',
  'UTC-4\tAmerica/Curacao',
  'UTC-4\tAmerica/Dominica',
  'UTC-4\tAmerica/Glace_Bay',
  'UTC-4\tAmerica/Goose_Bay',
  'UTC-4\tAmerica/Grenada',
  'UTC-4\tAmerica/Guadeloupe',
  'UTC-4\tAmerica/Guyana',
  'UTC-4\tAmerica/Halifax',
  'UTC-4\tAmerica/Kralendijk',
  'UTC-4\tAmerica/La_Paz',
  'UTC-4\tAmerica/Lower_Princes',
  'UTC-4\tAmerica/Manaus',
  'UTC-4\tAmerica/Marigot',
  'UTC-4\tAmerica/Martinique',
  'UTC-4\tAmerica/Moncton',
  'UTC-4\tAmerica/Montserrat',
  'UTC-4\tAmerica/Porto_Velho',
  'UTC-4\tAmerica/Port_of_Spain',
  'UTC-4\tAmerica/Puerto_Rico',
  'UTC-4\tAmerica/Santiago',
  'UTC-4\tAmerica/Santo_Domingo',
  'UTC-4\tAmerica/St_Barthelemy',
  'UTC-4\tAmerica/St_Kitts',
  'UTC-4\tAmerica/St_Lucia',
  'UTC-4\tAmerica/St_Thomas',
  'UTC-4\tAmerica/St_Vincent',
  'UTC-4\tAmerica/Thule',
  'UTC-4\tAmerica/Tortola',
  'UTC-4\tAtlantic/Bermuda',
  'UTC-3:30\tAmerica/St_Johns',
  'UTC-3\tAmerica/Araguaina',
  'UTC-3\tAmerica/Argentina/Buenos_Aires',
  'UTC-3\tAmerica/Argentina/Catamarca',
  'UTC-3\tAmerica/Argentina/Cordoba',
  'UTC-3\tAmerica/Argentina/Jujuy',
  'UTC-3\tAmerica/Argentina/La_Rioja',
  'UTC-3\tAmerica/Argentina/Mendoza',
  'UTC-3\tAmerica/Argentina/Rio_Gallegos',
  'UTC-3\tAmerica/Argentina/Salta',
  'UTC-3\tAmerica/Argentina/San_Juan',
  'UTC-3\tAmerica/Argentina/San_Luis',
  'UTC-3\tAmerica/Argentina/Tucuman',
  'UTC-3\tAmerica/Argentina/Ushuaia',
  'UTC-3\tAmerica/Bahia',
  'UTC-3\tAmerica/Belem',
  'UTC-3\tAmerica/Cayenne',
  'UTC-3\tAmerica/Fortaleza',
  'UTC-3\tAmerica/Maceio',
  'UTC-3\tAmerica/Miquelon',
  'UTC-3\tAmerica/Montevideo',
  'UTC-3\tAmerica/Paramaribo',
  'UTC-3\tAmerica/Punta_Arenas',
  'UTC-3\tAmerica/Recife',
  'UTC-3\tAmerica/Santarem',
  'UTC-3\tAmerica/Sao_Paulo',
  'UTC-3\tAntarctica/Palmer',
  'UTC-3\tAntarctica/Rothera',
  'UTC-3\tAtlantic/Stanley',
  'UTC-2\tAmerica/Noronha',
  'UTC-2\tAmerica/Nuuk',
  'UTC-2\tAtlantic/South_Georgia',
  'UTC-1\tAmerica/Scoresbysund',
  'UTC-1\tAtlantic/Azores',
  'UTC-1\tAtlantic/Cape_Verde',
  'UTC+0\tAfrica/Abidjan',
  'UTC+0\tAfrica/Accra',
  'UTC+0\tAfrica/Bamako',
  'UTC+0\tAfrica/Banjul',
  'UTC+0\tAfrica/Bissau',
  'UTC+0\tAfrica/Casablanca',
  'UTC+0\tAfrica/Conakry',
  'UTC+0\tAfrica/Dakar',
  'UTC+0\tAfrica/El_Aaiun',
  'UTC+0\tAfrica/Freetown',
  'UTC+0\tAfrica/Lome',
  'UTC+0\tAfrica/Monrovia',
  'UTC+0\tAfrica/Nouakchott',
  'UTC+0\tAfrica/Ouagadougou',
  'UTC+0\tAfrica/Sao_Tome',
  'UTC+0\tAmerica/Danmarkshavn',
  'UTC+0\tAntarctica/Troll',
  'UTC+0\tAtlantic/Canary',
  'UTC+0\tAtlantic/Faroe',
  'UTC+0\tAtlantic/Madeira',
  'UTC+0\tAtlantic/Reykjavik',
  'UTC+0\tAtlantic/St_Helena',
  'UTC+0\tEurope/Dublin',
  'UTC+0\tEurope/Guernsey',
  'UTC+0\tEurope/Isle_of_Man',
  'UTC+0\tEurope/Jersey',
  'UTC+0\tEurope/Lisbon',
  'UTC+0\tEurope/London',
  'UTC+1\tAfrica/Algiers',
  'UTC+1\tAfrica/Bangui',
  'UTC+1\tAfrica/Brazzaville',
  'UTC+1\tAfrica/Ceuta',
  'UTC+1\tAfrica/Douala',
  'UTC+1\tAfrica/Kinshasa',
  'UTC+1\tAfrica/Lagos',
  'UTC+1\tAfrica/Libreville',
  'UTC+1\tAfrica/Luanda',
  'UTC+1\tAfrica/Malabo',
  'UTC+1\tAfrica/Ndjamena',
  'UTC+1\tAfrica/Niamey',
  'UTC+1\tAfrica/Porto-Novo',
  'UTC+1\tAfrica/Tunis',
  'UTC+1\tAfrica/Windhoek',
  'UTC+1\tArctic/Longyearbyen',
  'UTC+1\tEurope/Amsterdam',
  'UTC+1\tEurope/Andorra',
  'UTC+1\tEurope/Belgrade',
  'UTC+1\tEurope/Berlin',
  'UTC+1\tEurope/Bratislava',
  'UTC+1\tEurope/Brussels',
  'UTC+1\tEurope/Budapest',
  'UTC+1\tEurope/Copenhagen',
  'UTC+1\tEurope/Gibraltar',
  'UTC+1\tEurope/Ljubljana',
  'UTC+1\tEurope/Luxembourg',
  'UTC+1\tEurope/Madrid',
  'UTC+1\tEurope/Malta',
  'UTC+1\tEurope/Monaco',
  'UTC+1\tEurope/Oslo',
  'UTC+1\tEurope/Paris',
  'UTC+1\tEurope/Podgorica',
  'UTC+1\tEurope/Prague',
  'UTC+1\tEurope/Rome',
  'UTC+1\tEurope/San_Marino',
  'UTC+1\tEurope/Sarajevo',
  'UTC+1\tEurope/Skopje',
  'UTC+1\tEurope/Stockholm',
  'UTC+1\tEurope/Tirane',
  'UTC+1\tEurope/Vaduz',
  'UTC+1\tEurope/Vatican',
  'UTC+1\tEurope/Vienna',
  'UTC+1\tEurope/Warsaw',
  'UTC+1\tEurope/Zagreb',
  'UTC+1\tEurope/Zurich',
  'UTC+2\tAfrica/Blantyre',
  'UTC+2\tAfrica/Bujumbura',
  'UTC+2\tAfrica/Cairo',
  'UTC+2\tAfrica/Gaborone',
  'UTC+2\tAfrica/Harare',
  'UTC+2\tAfrica/Johannesburg',
  'UTC+2\tAfrica/Juba',
  'UTC+2\tAfrica/Khartoum',
  'UTC+2\tAfrica/Kigali',
  'UTC+2\tAfrica/Lubumbashi',
  'UTC+2\tAfrica/Lusaka',
  'UTC+2\tAfrica/Maputo',
  'UTC+2\tAfrica/Maseru',
  'UTC+2\tAfrica/Mbabane',
  'UTC+2\tAfrica/Tripoli',
  'UTC+2\tAsia/Beirut',
  'UTC+2\tAsia/Famagusta',
  'UTC+2\tAsia/Gaza',
  'UTC+2\tAsia/Hebron',
  'UTC+2\tAsia/Jerusalem',
  'UTC+2\tAsia/Nicosia',
  'UTC+2\tEurope/Athens',
  'UTC+2\tEurope/Bucharest',
  'UTC+2\tEurope/Chisinau',
  'UTC+2\tEurope/Helsinki',
  'UTC+2\tEurope/Kaliningrad',
  'UTC+2\tEurope/Kyiv',
  'UTC+2\tEurope/Mariehamn',
  'UTC+2\tEurope/Riga',
  'UTC+2\tEurope/Sofia',
  'UTC+2\tEurope/Tallinn',
  'UTC+2\tEurope/Vilnius',
  'UTC+3\tAfrica/Addis_Ababa',
  'UTC+3\tAfrica/Asmara',
  'UTC+3\tAfrica/Dar_es_Salaam',
  'UTC+3\tAfrica/Djibouti',
  'UTC+3\tAfrica/Kampala',
  'UTC+3\tAfrica/Mogadishu',
  'UTC+3\tAfrica/Nairobi',
  'UTC+3\tAntarctica/Syowa',
  'UTC+3\tAsia/Aden',
  'UTC+3\tAsia/Amman',
  'UTC+3\tAsia/Baghdad',
  'UTC+3\tAsia/Bahrain',
  'UTC+3\tAsia/Damascus',
  'UTC+3\tAsia/Kuwait',
  'UTC+3\tAsia/Qatar',
  'UTC+3\tAsia/Riyadh',
  'UTC+3\tEurope/Istanbul',
  'UTC+3\tEurope/Kirov',
  'UTC+3\tEurope/Minsk',
  'UTC+3\tEurope/Moscow',
  'UTC+3\tEurope/Simferopol',
  'UTC+3\tEurope/Volgograd',
  'UTC+3\tIndian/Antananarivo',
  'UTC+3\tIndian/Comoro',
  'UTC+3\tIndian/Mayotte',
  'UTC+3:30\tAsia/Tehran',
  'UTC+4\tAsia/Baku',
  'UTC+4\tAsia/Dubai',
  'UTC+4\tAsia/Muscat',
  'UTC+4\tAsia/Tbilisi',
  'UTC+4\tAsia/Yerevan',
  'UTC+4\tEurope/Astrakhan',
  'UTC+4\tEurope/Samara',
  'UTC+4\tEurope/Saratov',
  'UTC+4\tEurope/Ulyanovsk',
  'UTC+4\tIndian/Mahe',
  'UTC+4\tIndian/Mauritius',
  'UTC+4\tIndian/Reunion',
  'UTC+4:30\tAsia/Kabul',
  'UTC+5\tAntarctica/Mawson',
  'UTC+5\tAsia/Aqtau',
  'UTC+5\tAsia/Aqtobe',
  'UTC+5\tAsia/Ashgabat',
  'UTC+5\tAsia/Atyrau',
  'UTC+5\tAsia/Dushanbe',
  'UTC+5\tAsia/Karachi',
  'UTC+5\tAsia/Oral',
  'UTC+5\tAsia/Qyzylorda',
  'UTC+5\tAsia/Samarkand',
  'UTC+5\tAsia/Tashkent',
  'UTC+5\tAsia/Yekaterinburg',
  'UTC+5\tIndian/Kerguelen',
  'UTC+5\tIndian/Maldives',
  'UTC+5:30\tAsia/Colombo',
  'UTC+5:30\tAsia/Kolkata',
  'UTC+5:45\tAsia/Kathmandu',
  'UTC+6\tAntarctica/Vostok',
  'UTC+6\tAsia/Almaty',
  'UTC+6\tAsia/Bishkek',
  'UTC+6\tAsia/Dhaka',
  'UTC+6\tAsia/Omsk',
  'UTC+6\tAsia/Qostanay',
  'UTC+6\tAsia/Thimphu',
  'UTC+6\tAsia/Urumqi',
  'UTC+6\tIndian/Chagos',
  'UTC+6:30\tAsia/Yangon',
  'UTC+6:30\tIndian/Cocos',
  'UTC+7\tAntarctica/Davis',
  'UTC+7\tAsia/Bangkok',
  'UTC+7\tAsia/Barnaul',
  'UTC+7\tAsia/Hovd',
  'UTC+7\tAsia/Ho_Chi_Minh',
  'UTC+7\tAsia/Jakarta',
  'UTC+7\tAsia/Krasnoyarsk',
  'UTC+7\tAsia/Novokuznetsk',
  'UTC+7\tAsia/Novosibirsk',
  'UTC+7\tAsia/Phnom_Penh',
  'UTC+7\tAsia/Pontianak',
  'UTC+7\tAsia/Tomsk',
  'UTC+7\tAsia/Vientiane',
  'UTC+7\tIndian/Christmas',
  'UTC+8\tAsia/Brunei',
  'UTC+8\tAsia/Choibalsan',
  'UTC+8\tAsia/Hong_Kong',
  'UTC+8\tAsia/Irkutsk',
  'UTC+8\tAsia/Kuala_Lumpur',
  'UTC+8\tAsia/Kuching',
  'UTC+8\tAsia/Macau',
  'UTC+8\tAsia/Makassar',
  'UTC+8\tAsia/Manila',
  'UTC+8\tAsia/Shanghai',
  'UTC+8\tAsia/Singapore',
  'UTC+8\tAsia/Taipei',
  'UTC+8\tAsia/Ulaanbaatar',
  'UTC+8\tAustralia/Perth',
  'UTC+8:45\tAustralia/Eucla',
  'UTC+9\tAsia/Chita',
  'UTC+9\tAsia/Dili',
  'UTC+9\tAsia/Jayapura',
  'UTC+9\tAsia/Khandyga',
  'UTC+9\tAsia/Pyongyang',
  'UTC+9\tAsia/Seoul',
  'UTC+9\tAsia/Tokyo',
  'UTC+9\tAsia/Yakutsk',
  'UTC+9\tPacific/Palau',
  'UTC+9:30\tAustralia/Adelaide',
  'UTC+9:30\tAustralia/Broken_Hill',
  'UTC+9:30\tAustralia/Darwin',
  'UTC+10\tAntarctica/DumontDUrville',
  'UTC+10\tAntarctica/Macquarie',
  'UTC+10\tAsia/Ust-Nera',
  'UTC+10\tAsia/Vladivostok',
  'UTC+10\tAustralia/Brisbane',
  'UTC+10\tAustralia/Hobart',
  'UTC+10\tAustralia/Lindeman',
  'UTC+10\tAustralia/Melbourne',
  'UTC+10\tAustralia/Sydney',
  'UTC+10\tPacific/Chuuk',
  'UTC+10\tPacific/Guam',
  'UTC+10\tPacific/Port_Moresby',
  'UTC+10\tPacific/Saipan',
  'UTC+10:30\tAustralia/Lord_Howe',
  'UTC+11\tAntarctica/Casey',
  'UTC+11\tAsia/Magadan',
  'UTC+11\tAsia/Sakhalin',
  'UTC+11\tAsia/Srednekolymsk',
  'UTC+11\tPacific/Bougainville',
  'UTC+11\tPacific/Efate',
  'UTC+11\tPacific/Guadalcanal',
  'UTC+11\tPacific/Kosrae',
  'UTC+11\tPacific/Norfolk',
  'UTC+11\tPacific/Noumea',
  'UTC+11\tPacific/Pohnpei',
  'UTC+12\tAntarctica/McMurdo',
  'UTC+12\tAsia/Anadyr',
  'UTC+12\tAsia/Kamchatka',
  'UTC+12\tPacific/Auckland',
  'UTC+12\tPacific/Fiji',
  'UTC+12\tPacific/Funafuti',
  'UTC+12\tPacific/Kwajalein',
  'UTC+12\tPacific/Majuro',
  'UTC+12\tPacific/Nauru',
  'UTC+12\tPacific/Tarawa',
  'UTC+12\tPacific/Wake',
  'UTC+12\tPacific/Wallis',
  'UTC+12:45\tPacific/Chatham',
  'UTC+13\tPacific/Apia',
  'UTC+13\tPacific/Fakaofo',
  'UTC+13\tPacific/Kanton',
  'UTC+13\tPacific/Tongatapu',
  'UTC+14\tPacific/Kiritimati',
];
