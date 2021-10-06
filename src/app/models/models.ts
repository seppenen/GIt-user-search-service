
export class DataObj {

  searchType: any
  userProfile: any
  query: string
  find(param: (item) => boolean):any {

  }
}

type userProfile =
[{
  total_count: number
  incomplete_results: boolean
  items: [
    {
      login: string
      id: string
      node_id: string
      avatar_url: string
      gravatar_id: string
      url: string
      html_url: string
      followers_url: string
      following_url: string
      gists_url: string
      starred_url: string
      subscriptions_url: string
      organizations_url: string
      repos_url: string
      events_url: string
      received_events_url: string
      type: string
      site_admin: boolean
      score: number
    }
  ];

}]

type searchType = {
      value: string
      checked: boolean
      find(param: (item) => boolean): any;
  }



