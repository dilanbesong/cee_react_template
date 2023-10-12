

export function mutualArray(friendList1, friendList2){
    let NumberOfCommonFriends = []
   let relations = friendList1.map( friend1 => {
        return friendList2.map(friend2 => {
             if( friend1 == friend2){
                NumberOfCommonFriends.push(friend1)
                return NumberOfCommonFriends
             }
         })         
    }).flat(2)
    
    return relations.length
}