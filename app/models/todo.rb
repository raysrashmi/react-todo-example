class Todo < ApplicationRecord
  enum state: { pending: 0, completed: 1 }
end
