export interface NYTResponse {
  status: string;
  copyright: string;
  response: {
    docs: Article[];
    meta: Meta;
  };
}

interface Meta {
  hits: number;
  offset: number;
  time: number;
}

export interface Article {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  print_section: string;
  print_page: string;
  source: string;
  multimedia: Multimedia[];
  headline: Headline;
  keywords: Keywords[];
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  byline: Byline;
  type_of_material: string;
  _id: string;
  word_count: number;
  uri: string;
}

export interface Keywords {
  name: string;
  value: string;
  rank: number;
  major: string;
}

export interface Multimedia {
  rank: number;
  subtype: string;
  caption: string;
  credit: string;
  type: string;
  url: string;
  height: number;
  width: number;
  legacy: {
    xlarge: string;
    xlargewidth: number;
    xlargeheight: number;
  };
  subType: string;
  crop_name: string;
}

export interface Headline {
  main: string;
  kicker: string;
  content_kicker: string;
  print_headline: string;
  name: string;
  seo: string;
  sub: string;
}

interface Byline {
  original: string;
  person: Person[];
  organization: string;
}

interface Person {
  firstname: string;
  middlename: string;
  lastname: string;
  qualifier: string;
  title: string;
  role: string;
  organization: string;
  rank: number;
}
