class Api {
  getEvents() {
    let url = 'https://api.cultserv.ru/v4/events/list?limit=8&offset=0&fields=seo,categories,tags,subevents.venue&category_id=10&session=123';

    return fetch(url)
      .then((res) => {
        if( res.status !== 200 ) throw new Error('Events request failed!');
      
        return res.json();
      });
  }
}

module.exports = Api;