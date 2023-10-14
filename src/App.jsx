import React from "react"
import TwitterFollowCard from "./TwitterFollowCard"

export default function App () {
  return (
    <section>
      <TwitterFollowCard userName="scotiabank" name="Scotiabank" isFollowing={true}/>
      <TwitterFollowCard userName="corhuila" name="Corhuila" isFollowing={false} />
      <TwitterFollowCard userName="lgmoralesa" name="Laura Morales" isFollowing={false}/>
    </section>
  )
}