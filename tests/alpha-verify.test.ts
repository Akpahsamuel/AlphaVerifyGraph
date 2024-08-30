import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
import { AccessGranted } from "../generated/schema"
import { AccessGranted as AccessGrantedEvent } from "../generated/AlphaVerify/AlphaVerify"
import { handleAccessGranted } from "../src/alpha-verify"
import { createAccessGrantedEvent } from "./alpha-verify-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let tokenId = BigInt.fromI32(234)
    let accessToken = Bytes.fromI32(1234567890)
    let expirationTime = BigInt.fromI32(234)
    let newAccessGrantedEvent = createAccessGrantedEvent(
      tokenId,
      accessToken,
      expirationTime
    )
    handleAccessGranted(newAccessGrantedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AccessGranted created and stored", () => {
    assert.entityCount("AccessGranted", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AccessGranted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenId",
      "234"
    )
    assert.fieldEquals(
      "AccessGranted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "accessToken",
      "1234567890"
    )
    assert.fieldEquals(
      "AccessGranted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "expirationTime",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
