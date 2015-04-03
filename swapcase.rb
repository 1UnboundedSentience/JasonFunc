def SwapCase(str)
  a = str.split('')
  counter = 0
  a.each do |x|
    if ( x == x.upcase)
      x = x.downcase
      a[counter] = x
      
    #end
    
    elsif ( x == x.downcase)
      x = x.upcase
      a[counter] = x
    end
    counter += 1
  end
  
  
  str = a.join('')
  return a
         
end
