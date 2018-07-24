#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]
def times_two(array)
    i=0
    while i < array.length
        puts array[i]*2
        i += 1
    end
end


#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

# I think that the .new built in ruby method is great because it allows you to create a new object from a class

@example = Example.new

# The .to_str is great for putting information in a database

Example.new.to_str will turn the value into a string

# The .to_i is also great to do the opposite when retriving information from the database that needs to be edited in some way

Example.new.to_i

#### 3. Look at this horrible ruby code, and fix it to be good ruby code.


class Example
  def initialize(day)
    @day=day
  end

  def Say_hi
    if @day == "Friday"
        puts "TGIF!"
    elsif @day == "Monday"
        puts "Its monday again"
    else
        puts "another day"
    end
end
