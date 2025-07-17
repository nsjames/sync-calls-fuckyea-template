#include <eosio/eosio.hpp>
#include "syncs.hpp"
using namespace eosio;

CONTRACT actions : public contract {
   public:
      using contract::contract;

      ACTION test(){
         syncs::add_func add{ "synctest1111"_n };
         uint32_t result = add(100,300);
         check(false, "Sync action called successfully, result: " + std::to_string(result));
      }
};