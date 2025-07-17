#include <eosio/call.hpp>
#include <eosio/eosio.hpp>
using namespace eosio;

class [[eosio::contract]] syncs : public eosio::contract {
public:
   using contract::contract;

   [[eosio::call]]
   uint32_t add(uint32_t x, uint32_t y);
   using add_func = eosio::call_wrapper<"add"_i, &syncs::add>;
};