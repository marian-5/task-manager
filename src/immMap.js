 const immMap = {
  mutateCopy: (map,f) => {
    const copy = new Map(map);
    f(copy)
    return copy
  },
  set: (map,key,val) => immMap.mutateCopy(
    map,
    map => map.set(key,val)
  ),
  delete: (map,key) => immMap.mutateCopy(
    map,
    map => map.delete(key)
  ),
}
export default immMap