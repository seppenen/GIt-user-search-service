

export class DataObj {
      map(arg0: (item: any) => void) {
        throw new Error('Method not implemented.')
      }
     
      userProfile:userProfile
      searchType:searchType
}


type userProfile = {

      login:string
      id:string
      node_id:string
      avatar_url:string
      gravatar_id:string
      url:string
      html_url:string
      followers_url:string
      following_url:string
      gists_url:string
      starred_url:string
      subscriptions_url:string
      organizations_url:string
      repos_url:string
      events_url:string
      received_events_url:string
      type:string
      site_admin:boolean
      score: number

}

type searchType = {

      value:string
      label:string
      checked:boolean
}


