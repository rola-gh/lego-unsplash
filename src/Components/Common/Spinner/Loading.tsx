import {StyledSpinner}  from './loading.style'

export default function Loading() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <StyledSpinner />
    </div>
  )
}
